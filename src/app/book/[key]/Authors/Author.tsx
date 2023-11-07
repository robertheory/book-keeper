import { Typography } from '@mui/material';
import Link from 'next/link';

type AuthorProps = {
	id: string;
	name: string;
};

const Author = ({ name, id }: AuthorProps) => {
	const key = id.replace('/authors/', '');

	return (
		<Link href={`/author/${key}`} passHref>
			<Typography fontSize="1.2rem" fontStyle="oblique" fontWeight="300">
				{name}
			</Typography>
		</Link>
	);
};

export default Author;
