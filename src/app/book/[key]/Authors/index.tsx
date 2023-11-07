import { getAuhorsByKeys } from '@/services/book';
import { Stack, Typography } from '@mui/material';
import Author from './Author';

type AuthorsProps = {
	keys: string[];
};

const Authors = async ({ keys }: AuthorsProps) => {
	const authors = await getAuhorsByKeys(keys);

	return (
		<Stack
			width="100%"
			direction="row"
			justifyContent="flex-start"
			alignItems="center"
			gap={1}
		>
			<Typography fontWeight="600" fontSize="1.2rem">
				by
			</Typography>

			{authors.map((author) => (
				<Author key={author.key} name={author.name} id={author.key} />
			))}
		</Stack>
	);
};

export default Authors;
