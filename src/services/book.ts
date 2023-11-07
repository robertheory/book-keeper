import { BookQuery } from '@/intefaces';

export const searchBooksByText = async (text: string): Promise<BookQuery> => {
	console.log('text', text);
	const URI = `https://openlibrary.org/search.json?q=${text}`;

	const response = await fetch(URI);

	const data = (await response.json()) as BookQuery;

	return data;
};
