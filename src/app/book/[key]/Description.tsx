'use client';

import { Type } from '@/intefaces';
import { Button, Typography } from '@mui/material';
import { useState } from 'react';

type DescriptionProps = {
	text: string | Type;
};

const TEXT_MAX_LENGTH = 900;

const Description = ({ text }: DescriptionProps) => {
	const [showFullText, setShowFullText] = useState(false);

	const toggleShowFullText = () => {
		setShowFullText(!showFullText);
	};

	const finalText = typeof text === 'string' ? text : text.value;

	const textShouldExpand = finalText.length > TEXT_MAX_LENGTH;

	if (!showFullText && textShouldExpand) {
		return (
			<>
				<Typography variant="body1" align="justify" fontSize="1rem">
					{finalText.slice(0, TEXT_MAX_LENGTH)}...{' '}
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
				{finalText}
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
