'use client';

import { Book } from '@/intefaces';
import {
	existsInList,
	listsSliceState,
	toggleFromList,
} from '@/store/listsSlice';
import { Favorite } from '@mui/icons-material';
import { Button, Tooltip } from '@mui/material';
import { createElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

type ToggleButtonProps = {
	title: string;
	Icon: typeof Favorite;
	list: keyof listsSliceState;
	book: Book;
};

const ToggleButton = ({ title, Icon, list, book }: ToggleButtonProps) => {
	const isActive = useSelector(existsInList(list, book.id));

	const dispatch = useDispatch();

	const handleToggle = () => {
		dispatch(
			toggleFromList({
				list,
				book,
			})
		);
	};

	return (
		<Tooltip title={title}>
			<Button type="button" variant="text" onClick={() => handleToggle()}>
				{createElement(Icon, {
					color: isActive ? 'info' : 'action',
					sx: {
						transitions: 'all 1s ease-in-out',
					},
				})}
			</Button>
		</Tooltip>
	);
};

export default ToggleButton;
