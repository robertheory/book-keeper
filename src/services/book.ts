import { Author, BookQuery } from '@/intefaces';
import { Book } from '@/intefaces/Book';

export const searchBooksByText = async (text: string): Promise<BookQuery> => {
	const URI = `https://openlibrary.org/search.json?q=${text}`;

	const response = await fetch(URI);

	const data = (await response.json()) as BookQuery;

	return data;
};

export const getBookByKey = async (key: string): Promise<Book> => {
	const URI = `https://openlibrary.org/works/${key}.json`;

	const response = await fetch(URI);

	const data = (await response.json()) as Book | { error: string };

	if ('error' in data) {
		throw new Error('Book not found');
	}

	return data;
};

export const getBookCoverByCoverId = async (id: string) => {
	const URI = `https://covers.openlibrary.org/b/ID/${id}-M.jpg`;
	console.log('URI', URI);

	const response = await fetch(URI);

	const data = await response.blob();

	return URL.createObjectURL(data);
};

export const getAuhorByKey = async (key: string): Promise<Author> => {
	const URI = `https://openlibrary.org/authors/${key}.json`;

	const response = await fetch(URI);

	const data = (await response.json()) as Author;

	return data;
};

export const getAuhorsByKeys = async (keys: string[]): Promise<Author[]> => {
	const promises = keys.map((key) => getAuhorByKey(key));

	const data = await Promise.all(promises);

	return data;
};
