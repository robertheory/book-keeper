import { getBookByKey } from '@/services/book';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Authors from './Authors';
import Description from './Description';

type BookProps = { params: { key: 'OL13412291M' } };

const Book = async ({ params: { key } }: BookProps) => {
	const book = await getBookByKey(key);

	if (!book) {
		return {
			redirect: {
				destination: '/404',
				permanent: false,
			},
		};
	}

	const authorKeys = book.authors.map((author) =>
		author.author.key.replace('/authors/', '')
	);

	const createdAt = new Date(book.created.value).toLocaleString('en-US', {
		year: 'numeric',
	});

	return (
		<Stack
			width="100%"
			direction="row"
			justifyContent={{
				xs: 'center',
				sm: 'flex-start',
			}}
			alignItems="flex-start"
			flexWrap={{
				xs: 'wrap',
				sm: 'nowrap',
			}}
			gap={2}
		>
			<Image
				src={`https://covers.openlibrary.org/b/ID/${String(
					book.covers[book.covers.length - 2]
				)}-M.jpg`}
				alt={book.title}
				width={200}
				height={300}
			/>

			<Stack
				width="100%"
				direction="column"
				justifyContent="flex-start"
				alignItems="stretch"
				gap={2}
			>
				<Typography variant="h1" fontSize="2rem" fontWeight="600">
					{book.title} ({createdAt})
				</Typography>

				<Authors keys={authorKeys} />

				{book.description ? (
					<Description text={book.description} />
				) : (
					<Typography variant="body1" align="justify">
						No description available
					</Typography>
				)}
			</Stack>
		</Stack>
	);
};

export default Book;
