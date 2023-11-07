'use client';
import { BookQueryDoc } from '@/intefaces';
import { MenuItem } from '@mui/material';
import Link from 'next/link';

type SearchResultItemProps = {
	book: BookQueryDoc;
};

const SearchResultItem = ({ book }: SearchResultItemProps) => {
	const key = book.key.replace('/works/', '');

	const bookLink = `/book/${key}`;

	return (
		<Link
			href={bookLink}
			passHref
			key={book.key}
			style={{
				textDecoration: 'none',
				color: 'inherit',
			}}
		>
			<MenuItem>
				{book.title} {book.author_name && `by ${book.author_name}`}
			</MenuItem>
		</Link>
	);
};

export default SearchResultItem;
