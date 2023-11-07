import { Type } from './Author';

export interface Book {
	title: string;
	key: string;
	authors: BookAuthor[];
	type: {
		key: string;
	};
	description?: Type | string;
	covers: number[];
	subject_places: string[];
	subjects: string[];
	subject_people: string[];
	subject_times: string[];
	location: string;
	latest_revision: number;
	revision: number;
	created: Type;
	last_modified: Type;
}

export interface BookAuthor {
	author: { key: string };
	type: { key: string };
}
