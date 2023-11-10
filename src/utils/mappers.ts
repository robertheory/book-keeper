import { Languages } from '@/data/constants/languages';
import { Book, GoogleBook } from '@/intefaces';

export const bookToRecordMapper = (book: GoogleBook): Book => {
	const isbn10 = book.volumeInfo.industryIdentifiers?.find(
		(item) => item.type === 'ISBN_10'
	)?.identifier;
	const isbn13 = book.volumeInfo.industryIdentifiers?.find(
		(item) => item.type === 'ISBN_13'
	)?.identifier;

	const language =
		Languages[
			String(book.volumeInfo.language).toUpperCase() as keyof typeof Languages
		] ||
		book.volumeInfo.language ||
		'Unknown';

	const image =
		book.volumeInfo.imageLinks.medium ||
		book.volumeInfo.imageLinks.small ||
		book.volumeInfo.imageLinks.large ||
		book.volumeInfo.imageLinks.thumbnail ||
		'https://dummyimage.com/200x300/a6a6a6/ffffff.png&text=No+image';

	return {
		id: book.id,
		title: book.volumeInfo.title,
		subtitle: book.volumeInfo.subtitle,
		authors: book.volumeInfo.authors,
		language,
		pageCount: book.volumeInfo.pageCount,
		publishedDate: book.volumeInfo.publishedDate,
		publisher: book.volumeInfo.publisher,
		categories: book.volumeInfo.categories,
		description: book.volumeInfo.description,
		image,
		isbn10,
		isbn13,
	};
};
