export interface Book {
	id: string;
	title: string;
	subtitle?: string;
	authors: string[];
	publisher: string;
	publishedDate: string;
	description?: string;
	pageCount: number;
	categories?: string[];
	image: string;
	language: string;
	isbn10?: string;
	isbn13?: string;
}
