'use client';

import { Button, Typography } from '@mui/material';
import { useState } from 'react';

type DescriptionProps = {
	text: string;
};

const TEXT_MAX_LENGTH = 500;

const Description = ({ text }: DescriptionProps) => {
	const [showFullText, setShowFullText] = useState(false);

	const toggleShowFullText = () => {
		setShowFullText(!showFullText);
	};

	const description = text.replace(/<[^>]*>/g, '');

	const textShouldExpand = description.length > TEXT_MAX_LENGTH;

	if (!showFullText && textShouldExpand) {
		return (
			<>
				<Typography variant="body1" align="justify" fontSize="1rem">
					{description.slice(0, TEXT_MAX_LENGTH)}...{' '}
				</Typography>

				<Button onClick={() => toggleShowFullText()} variant="contained">
					Show more
				</Button>
			</>
		);
	}

	return (
		<>
			<Typography variant="body1" align="justify" fontSize="1rem">
				{description}
			</Typography>

			{textShouldExpand && (
				<Button onClick={() => toggleShowFullText()} variant="contained">
					Show less
				</Button>
			)}
		</>
	);
};

export default Description;
