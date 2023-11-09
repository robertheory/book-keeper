import { BookRecord, BooksQuery } from '@/intefaces';
import { Book } from '@/intefaces/Book';
import { bookToRecordMapper } from '@/utils/mappers';

export const searchBooksByText = async (text: string): Promise<BooksQuery> => {
	const URI = `https://www.googleapis.com/books/v1/volumes?q=${text}`;

	const response = await fetch(URI);

	const data = (await response.json()) as BooksQuery;

	return data;
};

export const getBookById = async (id: string): Promise<BookRecord> => {
	const URI = `https://www.googleapis.com/books/v1/volumes/${id}`;

	const response = await fetch(URI, {
		next: {
			tags: ['books'],
			revalidate: 60 * 60 * 24, // 24 hours
		},
	});

	const data = (await response.json()) as Book | { error: string };

	if ('error' in data) {
		throw new Error('Book not found');
	}

	return bookToRecordMapper(data);
};
