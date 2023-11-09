'use client';

import { listNameByType } from '@/data/constants/lists';
import { BookRecord } from '@/intefaces';
import {
	existsInList,
	listsSliceState,
	toggleFromList,
} from '@/store/listsSlice';
import { Favorite } from '@mui/icons-material';
import { Button, Tooltip } from '@mui/material';
import { useSnackbar } from 'notistack';
import { createElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

type ToggleButtonProps = {
	title: string;
	Icon: typeof Favorite;
	list: keyof listsSliceState;
	book: BookRecord;
};

const ToggleButton = ({ title, Icon, list, book }: ToggleButtonProps) => {
	const isActive = useSelector(existsInList(list, book.id));

	const dispatch = useDispatch();

	const { enqueueSnackbar } = useSnackbar();

	const handleToggle = () => {
		const listName = listNameByType[list];

		enqueueSnackbar(
			isActive
				? `Removed from ${listName}`
				: `Added
		to ${listName}`,
			{
				variant: isActive ? 'error' : 'success',
			}
		);

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
