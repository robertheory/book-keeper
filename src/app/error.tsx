'use client';

/* eslint-disable import/extensions */
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import notFoundPhrases from '../data/notFoundPhrases.json';

const ErrorPage = () => {
	const index = Math.floor(Math.random() * notFoundPhrases.length);

	const text = notFoundPhrases[index];

	return (
		<Stack
			direction="column"
			gap={4}
			width="100%"
			height="80vh"
			justifyContent="center"
			alignItems="center"
			p={4}
		>
			<Typography
				variant="h1"
				align="center"
				fontFamily="cursive"
				fontStyle="oblique"
				fontWeight="800"
				fontSize="3rem"
			>
				Something went wrong
			</Typography>

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
				fontSize="2rem"
			>
				{text}
			</Typography>
		</Stack>
	);
};

export default ErrorPage;
