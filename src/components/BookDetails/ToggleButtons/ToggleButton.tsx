'use client';

import ConfirmationDialog from '@/components/ConfirmationDialog';
import { listNameByType } from '@/data/constants/lists';
import { Book } from '@/intefaces';
import { ReadingListName } from '@/intefaces/ReadingLists';
import {
	createReadingItem,
	existsInList,
	removeReadingItem,
} from '@/store/listsSlice';
import { Favorite } from '@mui/icons-material';
import { Button, Tooltip } from '@mui/material';
import { useSnackbar } from 'notistack';
import { createElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

type ToggleButtonProps = {
	title: string;
	Icon: typeof Favorite;
	list: ReadingListName;
	book: Book;
};

const ToggleButton = ({ title, Icon, list, book }: ToggleButtonProps) => {
	const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =
		useState(false);

	const isActive = useSelector(existsInList(list, book.id));

	const dispatch = useDispatch();

	const { enqueueSnackbar } = useSnackbar();

	const handleAddToList = () => {
		dispatch(createReadingItem({ book, list }));
		enqueueSnackbar(`Added to ${listNameByType[list]}`, {
			variant: 'success',
		});
	};

	const handleRemoveFromList = () => {
		setIsConfirmationDialogOpen(true);
		dispatch(removeReadingItem({ book, list }));
		enqueueSnackbar(`Removed from ${listNameByType[list]}`, {
			variant: 'error',
		});
	};

	const handleManageReadingItem = () => {
		if (isActive) {
			setIsConfirmationDialogOpen(true);
		} else {
			handleAddToList();
		}
	};

	return (
		<>
			<ConfirmationDialog
				isOpen={isConfirmationDialogOpen}
				handleClose={() => setIsConfirmationDialogOpen(false)}
				title={`Remove from ${listNameByType[list]}`}
				description={`Are you sure you want to remove this book from ${listNameByType[list]}?`}
				handleAction={() => handleRemoveFromList()}
			/>
			<Tooltip title={title}>
				<Button
					type="button"
					variant="text"
					onClick={() => handleManageReadingItem()}
				>
					{createElement(Icon, {
						color: isActive ? 'info' : 'action',
						sx: {
							transitions: 'all 1s ease-in-out',
						},
					})}
				</Button>
			</Tooltip>
		</>
	);
};

export default ToggleButton;
