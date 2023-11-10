'use client';

import { ReadingListItem } from '@/intefaces/ReadingLists';
import {
	Box,
	CardActionArea,
	Divider,
	Stack,
	useMediaQuery,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { useState } from 'react';
import BookModalPreview from './BookModalPreview';

type ReadingItemCardProps = {
	readingItem: ReadingListItem;
};

const MAX_TITLE_LENGTH = 30;

const ReadingItemCard = ({ readingItem }: ReadingItemCardProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const isMobile = useMediaQuery('(max-width: 600px)');

	const slicedTitle =
		readingItem.book.title.length > MAX_TITLE_LENGTH
			? readingItem.book.title.slice(0, MAX_TITLE_LENGTH).concat('...')
			: readingItem.book.title;

	const title = isMobile ? readingItem.book.title : slicedTitle;

	return (
		<>
			<BookModalPreview
				book={readingItem.book}
				handleCloseModal={() => setIsModalOpen(false)}
				isOpen={isModalOpen}
			/>
			<Card
				sx={{
					display: 'flex',
					width: {
						xs: '100%',
						sm: '600px',
					},
				}}
			>
				<CardActionArea onClick={() => setIsModalOpen(true)}>
					<Box sx={{ display: 'flex', flexDirection: 'column' }}>
						<CardContent sx={{ flex: '1 0 auto' }}>
							<Stack
								width="100%"
								height="100%"
								direction="column"
								justifyContent="flex-start"
								alignItems="flex-start"
								gap={2}
							>
								<Stack direction="column" gap={1}>
									<Typography
										component="div"
										variant="h3"
										fontSize="1.4rem"
										sx={{
											wordBreak: 'break-word',
										}}
									>
										{title}
									</Typography>
									<Typography
										variant="subtitle1"
										color="text.primary"
										component="div"
										fontSize="1.2rem"
										fontStyle="italic"
									>
										{readingItem.book.authors.join(', ')}
									</Typography>
								</Stack>

								<Divider />

								<Stack direction="column" gap={0}>
									<Typography
										variant="subtitle1"
										color="text.primary"
										component="div"
										fontSize="1.2rem"
									>
										Current page: {readingItem.currentPage}
									</Typography>
									<Typography
										variant="subtitle1"
										color="text.primary"
										component="div"
										fontSize="1.2rem"
									>
										Time spent: {readingItem.elapsedTime}
									</Typography>
									<Typography
										variant="subtitle1"
										color="text.primary"
										component="div"
										fontSize="1.2rem"
									>
										{readingItem.notes.length} notes
									</Typography>
								</Stack>
							</Stack>
						</CardContent>
					</Box>
				</CardActionArea>
				{!isMobile && (
					<Image
						width={200}
						height={300}
						src={readingItem.book.image}
						alt={readingItem.book.title}
					/>
				)}
			</Card>
		</>
	);
};

export default ReadingItemCard;
