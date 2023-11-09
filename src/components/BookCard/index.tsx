import { BookRecord } from '@/intefaces';
import { escapeHtml } from '@/utils/formatting';
import { CardActionArea, Divider, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import BookModalPreview from './BookModalPreview';

type BookCardProps = {
	book: BookRecord;
};

const BookCard = ({ book }: BookCardProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const imageURL =
		book.image ||
		'https://dummyimage.com/200x300/a6a6a6/ffffff.png&text=No+image';

	const slicedDescription = book.description
		? escapeHtml(book.description).slice(0, 200).concat('...')
		: 'No description';

	return (
		<>
			<BookModalPreview
				book={book}
				handleCloseModal={() => setIsModalOpen(false)}
				isOpen={isModalOpen}
			/>

			<Card sx={{ maxWidth: 345 }}>
				<CardActionArea onClick={() => setIsModalOpen(true)}>
					<CardMedia
						component="img"
						height="300"
						image={imageURL}
						alt={book.title}
					/>
					<CardContent>
						<Stack
							direction="column"
							justifyContent="flex-start"
							alignItems="flex-start"
							gap={1}
						>
							<Stack
								direction="column"
								justifyContent="flex-start"
								alignItems="flex-start"
								spacing={-0.5}
							>
								<Typography
									gutterBottom
									variant="h5"
									fontSize="1.2rem"
									fontWeight="600"
									component="div"
								>
									{book.title}
								</Typography>

								{book.subtitle && (
									<Typography
										variant="subtitle1"
										color="text.primary"
										fontStyle="italic"
										fontWeight="600"
									>
										{book.subtitle}
									</Typography>
								)}
							</Stack>

							<Typography variant="subtitle2" color="text.primary">
								{book.publisher} - {book.publishedDate}
							</Typography>

							<Divider sx={{ width: '100%' }} />

							<Typography variant="body2" color="text.primary">
								{slicedDescription}
							</Typography>
						</Stack>
					</CardContent>
				</CardActionArea>
			</Card>
		</>
	);
};

export default BookCard;
