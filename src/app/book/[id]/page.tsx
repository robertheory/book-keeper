import { Languages } from '@/data/constants/languages';
import { getBookByKey } from '@/services/book';
import { Divider, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Description from './Description';

type BookProps = { params: { id: string } };

const Book = async ({ params: { id } }: BookProps) => {
	const book = await getBookByKey(id);

	if (!book) {
		return {
			redirect: {
				destination: '/404',
				permanent: false,
			},
		};
	}

	const {
		title,
		subtitle,
		authors,
		description,
		publisher,
		publishedDate,
		industryIdentifiers,
		pageCount,
		imageLinks,
		categories,
	} = book.volumeInfo;

	const createdAt = new Date(publishedDate).toLocaleString('en-US', {
		year: 'numeric',
	});

	const image =
		imageLinks?.large ||
		imageLinks?.medium ||
		imageLinks?.small ||
		imageLinks?.thumbnail ||
		'https://dummyimage.com/200x300/a6a6a6/ffffff.png&text=No+image';

	const language =
		Languages[
			String(book.volumeInfo.language).toUpperCase() as keyof typeof Languages
		] ||
		book.volumeInfo.language ||
		'Unknown';

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
			{image && <Image src={image} alt={title} width={200} height={300} />}

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

				{industryIdentifiers && (
					<Stack
						direction="row"
						justifyContent="flex-start"
						alignItems="center"
						flexWrap="wrap"
						gap={2}
					>
						{industryIdentifiers.map(({ type, identifier }, index) => (
							<Stack key={identifier}>
								<Typography variant="body1" fontWeight="300" aria-label={type}>
									{type.replace('_', ' ')}: {identifier}
								</Typography>

								{index < industryIdentifiers.length - 1 && (
									<Divider orientation="vertical" flexItem />
								)}
							</Stack>
						))}
					</Stack>
				)}

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

				<Description text={description} />
			</Stack>
		</Stack>
	);
};

export default Book;
