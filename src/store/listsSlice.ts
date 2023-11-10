import { Book } from '@/intefaces';
import { ReadingListItem, ReadingListName } from '@/intefaces/ReadingLists';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';

export type listsSliceState = {
	favorites: Book[];
	readingLists: {
		[name in ReadingListName]: ReadingListItem[];
	};
};

const initialState: listsSliceState = {
	favorites: [],
	readingLists: {
		toRead: [],
		reading: [],
		read: [],
	},
};

type readingListsPayload = {
	list: ReadingListName;
	book: Book;
};

type changeReadingListPayload = {
	listFrom: ReadingListName;
	listTo: ReadingListName;
	book: Book;
};

export const listsSlice = createSlice({
	name: 'lists',
	initialState,
	reducers: {
		toggleFavorite: (
			state,
			{
				payload,
			}: {
				payload: Book;
			}
		) => {
			const index = state.favorites.findIndex((item) => item.id === payload.id);
			if (index === -1) {
				state.favorites.push(payload);
			} else {
				state.favorites.splice(index, 1);
			}
		},
		createReadingItem: (
			state,
			{ payload: { book, list } }: { payload: readingListsPayload }
		) => {
			const alreadyExists = state.readingLists[list].find(
				(item) => item.book.id === book.id
			);

			if (alreadyExists) {
				return;
			}

			const existsInOtherList = Object.keys(state.readingLists).find(
				(listName) =>
					listName !== list &&
					state.readingLists[listName as ReadingListName].find(
						(item) => item.book.id === book.id
					)
			);

			if (existsInOtherList) {
				const index = state.readingLists[
					existsInOtherList as ReadingListName
				].findIndex((item) => item.book.id === book.id);

				if (index === -1) {
					return;
				}

				const readingItem =
					state.readingLists[existsInOtherList as ReadingListName][index];

				state.readingLists[existsInOtherList as ReadingListName].splice(
					index,
					1
				);

				state.readingLists[list].push(readingItem);

				return;
			}

			const newReadingItem = {
				book,
				currentPage: 0,
				elapsedTime: 0,
				notes: [],
			};

			state.readingLists[list].push(newReadingItem);
		},
		removeReadingItem: (
			state,
			{ payload: { book, list } }: { payload: readingListsPayload }
		) => {
			const index = state.readingLists[list].findIndex(
				(item) => item.book.id === book.id
			);

			if (index === -1) {
				return;
			}

			state.readingLists[list].splice(index, 1);
		},
		changeReadingList: (
			state,
			{
				payload: { listFrom, listTo, book },
			}: { payload: changeReadingListPayload }
		) => {
			const index = state.readingLists[listFrom].findIndex(
				(item) => item.book.id === book.id
			);

			if (index === -1) {
				return;
			}

			const readingItem = state.readingLists[listFrom][index];

			state.readingLists[listFrom].splice(index, 1);

			state.readingLists[listTo].push(readingItem);
		},
	},
});

export const {
	toggleFavorite,
	changeReadingList,
	createReadingItem,
	removeReadingItem,
} = listsSlice.actions;

export const getLists = () => (state: RootState) => state.lists;

export const getList = (list: ReadingListName) => (state: RootState) =>
	state.lists.readingLists[list];

export const getFavorites = () => (state: RootState) => state.lists.favorites;

export const existsInList =
	(list: ReadingListName, bookId: string) => (state: RootState) =>
		state.lists.readingLists[list].find((item) => item.book.id === bookId);

export const existsInOtherList =
	(currentList: ReadingListName, bookId: string) => (state: RootState) =>
		!!Object.keys(state.lists.readingLists).find(
			(listName) =>
				listName !== currentList &&
				state.lists.readingLists[listName as ReadingListName].find(
					(item) => item.book.id === bookId
				)
		);

export const isFavorite = (bookId: string) => (state: RootState) =>
	!!state.lists.favorites.find((item) => item.id === bookId);

export default listsSlice.reducer;
