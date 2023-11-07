'use client';
import { BooksQueryItem } from '@/intefaces';
import { MenuItem } from '@mui/material';
import Link from 'next/link';

type SearchResultItemProps = {
	book: BooksQueryItem;
	handleClear: () => void;
};

const SearchResultItem = ({
	book: {
		id,
		volumeInfo: { title, authors },
	},
	handleClear,
}: SearchResultItemProps) => {
	const bookLink = `/book/${id}`;

	return (
		<Link
			href={bookLink}
			passHref
			style={{
				textDecoration: 'none',
				color: 'inherit',
			}}
			onClick={handleClear}
		>
			<MenuItem>
				{title} {authors && `by ${authors.join(', ')}`}
			</MenuItem>
		</Link>
	);
};

export default SearchResultItem;
