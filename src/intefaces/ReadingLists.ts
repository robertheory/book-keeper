import { Book } from '@/intefaces';

export type ReadingListName = 'toRead' | 'reading' | 'read';

export interface ReadingNotes {
	id: string;
	text: string;
}

export interface ReadingListItem {
	book: Book;
	currentPage: number;
	elapsedTime: number;
	notes: ReadingNotes[];
}

export type ReadingList = {
	[name in ReadingListName]: ReadingListItem[];
};
