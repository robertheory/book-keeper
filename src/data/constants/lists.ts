import { ReadingListName } from './../../intefaces/ReadingLists';

export const pageTitleByListName: { [list in ReadingListName]: string } = {
	toRead: 'Books to read',
	read: 'Read books',
	reading: 'Reading books',
};

export const listNameByType: { [list in ReadingListName]: string } = {
	toRead: 'To-Read',
	read: 'Read',
	reading: 'Reading',
};
