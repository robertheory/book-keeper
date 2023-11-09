import { listsSliceState } from '@/store/listsSlice';

export const pageTitleByListName: {
	[key in keyof listsSliceState]: string;
} = {
	toRead: 'Books to read',
	favorites: 'Favorite books',
	read: 'Read books',
	reading: 'Reading books',
};

export const listNameByType: {
	[key in keyof listsSliceState]: string;
} = {
	toRead: 'To-Read',
	favorites: 'Favorites',
	read: 'Read',
	reading: 'Reading',
};
