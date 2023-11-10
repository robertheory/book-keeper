// eslint-disable-next-line import/extensions
import notFoundPhrases from '@/data/notFoundPhrases.json';
import { Book } from '@/intefaces';
import { Divider, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Description from './Description';
import ShareLinks from './ShareLinks';
import ToggleButtons from './ToggleButtons';

type BookDetailsProps = {
	book: Book;
};

const BookDetails = async ({ book }: BookDetailsProps) => {
	const {
		title,
		subtitle,
		authors,
		publisher,
		pageCount,
		categories,
		language,
		isbn10,
		isbn13,
	} = book;

	const createdAt = new Date(book.publishedDate).toLocaleString('en-US', {
		year: 'numeric',
	});

	const image =
		book.image ||
		'https://dummyimage.com/200x300/a6a6a6/ffffff.png&text=No+image';

	const index = Math.floor(Math.random() * notFoundPhrases.length);

	const descriptionNotFoundText = notFoundPhrases[index];

	const description =
		book.description ||
		`No description available \n ${descriptionNotFoundText}
	`;

	const isbnCodes = [
		{ type: 'ISBN 10', identifier: isbn10 },
		{ type: 'ISBN 13', identifier: isbn13 },
	].filter(({ identifier }) => identifier);

	return (
		<Stack
			width="100%"
			direction="row"
			justifyContent={{
				xs: 'center',
				sm: 'center',
				md: 'flex-start',
			}}
			alignItems="flex-start"
			flexWrap={{
				xs: 'wrap',
				sm: 'wrap',
				md: 'nowrap',
			}}
			gap={2}
		>
			<Stack
				direction="column"
				justifyContent="flex-start"
				alignItems="center"
				gap={2}
			>
				<ToggleButtons book={book} />

				<Image
					src={image}
					alt={title}
					width={200}
					height={300}
					style={{
						borderRadius: '8px',
					}}
				/>

				<ShareLinks bookId={book.id} />
			</Stack>

			<Stack
				width="100%"
				direction="column"
				justifyContent="flex-start"
				alignItems="stretch"
				gap={2}
			>
				<Typography variant="h1" fontSize="1.8rem" fontWeight="600">
					{title}
				</Typography>

				{subtitle && (
					<Typography variant="h2" fontSize="1.2rem" fontWeight="400">
						{subtitle}
					</Typography>
				)}

				<Stack
					direction="row"
					justifyContent="flex-start"
					alignItems="center"
					gap={1}
				>
					by
					{authors.map((author) => (
						<Typography
							fontSize="1.2rem"
							fontStyle="oblique"
							fontWeight="300"
							key={author}
						>
							{author}
						</Typography>
					))}
				</Stack>

				<Typography variant="body1" fontWeight="300">
					Published by {publisher} in {createdAt}
				</Typography>

				<Stack
					direction="row"
					justifyContent="flex-start"
					alignItems="center"
					gap={2}
				>
					<Typography variant="body1" fontWeight="300">
						Language: {language}
					</Typography>

					<Divider orientation="vertical" flexItem />

					<Typography variant="body1" fontWeight="300">
						{pageCount} pages
					</Typography>
				</Stack>

				<Stack
					direction="row"
					justifyContent="flex-start"
					alignItems="center"
					flexWrap="wrap"
					gap={2}
				>
					{isbnCodes.map(({ type, identifier }, index) => (
						<Stack key={identifier}>
							<Typography variant="body1" fontWeight="300" aria-label={type}>
								{type}: {identifier}
							</Typography>

							{index < isbnCodes.length - 1 && (
								<Divider orientation="vertical" flexItem />
							)}
						</Stack>
					))}
				</Stack>

				{categories && (
					<Stack
						direction="row"
						justifyContent="flex-start"
						alignItems="center"
						flexWrap="wrap"
						gap={2}
					>
						{categories.map((category, index) => (
							<Stack key={category}>
								<Typography
									variant="body1"
									fontWeight="300"
									aria-label={category}
								>
									{category}
								</Typography>

								{index < categories.length - 1 && (
									<Divider orientation="vertical" flexItem />
								)}
							</Stack>
						))}
					</Stack>
				)}

				<Description text={description} />
			</Stack>
		</Stack>
	);
};

export default BookDetails;
