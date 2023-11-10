'use client';

import BookCard from '@/components/FavoriteCard';
import { getFavorites } from '@/store/listsSlice';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { useSelector } from 'react-redux';

const Favorites = () => {
	const favorites = useSelector(getFavorites());

	const isEmpty = favorites.length === 0;

	return (
		<Stack
			width="100%"
			direction="column"
			justifyContent="flex-start"
			alignItems="flex-start"
			gap={4}
		>
			<Typography variant="h1" fontWeight="600" fontSize="2rem">
				Favorite books
			</Typography>

			{isEmpty ? (
				<Stack
					width="100%"
					direction="column"
					justifyContent="center"
					alignItems="center"
					gap={2}
				>
					<Image
						src="/not-found.webp"
						width={300}
						height={300}
						alt="content not found"
					/>
					<Typography
						variant="h3"
						align="center"
						fontFamily="cursive"
						fontStyle="oblique"
						fontWeight="800"
						fontSize="2.5rem"
					>
						No books yet
					</Typography>
				</Stack>
			) : (
				<Stack
					direction="row"
					width="100%"
					justifyContent="flex-start"
					alignItems="flex-start"
					gap={2}
					flexWrap="wrap"
				>
					{favorites.map((book) => (
						<BookCard key={book.id} book={book} />
					))}
				</Stack>
			)}
		</Stack>
	);
};

export default Favorites;
