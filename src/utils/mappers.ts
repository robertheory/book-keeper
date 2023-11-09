import { Book, BookRecord } from '@/intefaces';

export const bookToRecordMapper = (book: Book): BookRecord => {
	const isbn10 = book.volumeInfo.industryIdentifiers?.find(
		(item) => item.type === 'ISBN_10'
	)?.identifier;
	const isbn13 = book.volumeInfo.industryIdentifiers?.find(
		(item) => item.type === 'ISBN_13'
	)?.identifier;

	return {
		id: book.id,
		title: book.volumeInfo.title,
		subtitle: book.volumeInfo.subtitle,
		authors: book.volumeInfo.authors,
		language: book.volumeInfo.language,
		pageCount: book.volumeInfo.pageCount,
		publishedDate: book.volumeInfo.publishedDate,
		publisher: book.volumeInfo.publisher,
		categories: book.volumeInfo.categories,
		description: book.volumeInfo.description,
		image: book.volumeInfo.imageLinks?.thumbnail,
		isbn10,
		isbn13,
	};
};
