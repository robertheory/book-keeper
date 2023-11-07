/* eslint-disable import/extensions */
import { Stack, Typography } from '@mui/material';
import phrases from '../data/phrases.json';
import poems from '../data/poems.json';

const Home = async () => {
	const texts = poems.concat(phrases);

	const index = Math.floor(Math.random() * texts.length);

	const text = texts[index];

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
				variant="h3"
				align="center"
				fontFamily="cursive"
				fontStyle="oblique"
				fontWeight="800"
				fontSize="2.5rem"
			>
				{text}
			</Typography>
		</Stack>
	);
};

export default Home;
