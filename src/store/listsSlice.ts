import { BookRecord } from '@/intefaces';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';

export type listsSliceState = {
	favorites: BookRecord[];
	toRead: BookRecord[];
	reading: BookRecord[];
	read: BookRecord[];
};

const initialState: listsSliceState = {
	favorites: [],
	toRead: [],
	reading: [],
	read: [],
};

type toggleFromListPayload = {
	payload: {
		book: BookRecord;
		list: keyof listsSliceState;
	};
};

const removeFromList = (list: BookRecord[], bookId: string) => {
	const index = list.findIndex((item) => item.id === bookId);

	if (index !== -1) {
		list.splice(index, 1);
	}
};

const removeFromLists = (bookId: string, lists: listsSliceState) => {
	removeFromList(lists.favorites, bookId);
	removeFromList(lists.toRead, bookId);
	removeFromList(lists.reading, bookId);
	removeFromList(lists.read, bookId);
};

export const listsSlice = createSlice({
	name: 'lists',
	initialState,
	reducers: {
		toggleFromList: (
			state,
			{ payload: { book, list } }: toggleFromListPayload
		) => {
			const alreadyExists = state[list].find((item) => item.id === book.id);

			if (!alreadyExists) {
				removeFromLists(book.id, state);

				state[list].push(book);

				return;
			}

			const index = state[list].findIndex((item) => item.id === book.id);

			state[list].splice(index, 1);
		},
	},
});

export const { toggleFromList } = listsSlice.actions;

export const getLists = () => (state: RootState) => state.lists;

export const getList = (list: keyof listsSliceState) => (state: RootState) =>
	state.lists[list];

export const existsInList =
	(list: keyof listsSliceState, bookId: string) => (state: RootState) =>
		state.lists[list].find((item) => item.id === bookId);

export default listsSlice.reducer;
