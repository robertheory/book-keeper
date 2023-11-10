'use client';

import { pageTitleByListName } from '@/data/constants/lists';
import { ReadingListName } from '@/intefaces/ReadingLists';
import { getList } from '@/store/listsSlice';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import ReadingItemCard from './ReadingItemCard';

type BookListComponentProps = {
	listName: ReadingListName;
};

const BookListComponent = ({ listName }: BookListComponentProps) => {
	const readlistItems = useSelector(getList(listName));

	const isEmpty = readlistItems.length === 0;

	return (
		<Stack
			width="100%"
			direction="column"
			justifyContent="flex-start"
			alignItems="flex-start"
			gap={4}
		>
			<Typography variant="h1" fontWeight="600" fontSize="2rem">
				{pageTitleByListName[listName]}
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
					direction="column"
					width="100%"
					justifyContent="flex-start"
					alignItems="center"
					gap={2}
				>
					{readlistItems.map((readlistItem) => (
						<ReadingItemCard
							readingItem={readlistItem}
							key={readlistItem.book.id}
						/>
					))}
				</Stack>
			)}
		</Stack>
	);
};

export default BookListComponent;
