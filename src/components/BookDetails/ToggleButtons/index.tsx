'use client';

import { Book } from '@/intefaces';
import { ReadingListName } from '@/intefaces/ReadingLists';
import { isFavorite, toggleFavorite } from '@/store/listsSlice';
import {
	Bookmark,
	BookmarkAdded,
	BookmarkBorder,
	Favorite,
} from '@mui/icons-material';
import { Button, Tooltip } from '@mui/material';
import { Stack } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import ToggleButton from './ToggleButton';

type ToggleButtonsProps = {
	book: Book;
};

type buttonsType = {
	list: ReadingListName;
	title: string;
	icon: any;
};

const buttons: buttonsType[] = [
	{
		title: 'Add to to-read list',
		icon: BookmarkBorder,
		list: 'toRead',
	},
	{
		title: 'Add to reading list',
		icon: Bookmark,
		list: 'reading',
	},
	{
		title: 'Mark as read',
		icon: BookmarkAdded,
		list: 'read',
	},
];

const ToggleButtons = ({ book }: ToggleButtonsProps) => {
	const dispatch = useDispatch();
	const isFavoriteAcrive = useSelector(isFavorite(book.id));

	return (
		<Stack
			width="100%"
			direction="row"
			justifyContent="space-evenly"
			alignItems="center"
			gap={2}
		>
			<Tooltip title="Toggle favorite">
				<Button
					type="button"
					variant="text"
					onClick={() => dispatch(toggleFavorite(book))}
				>
					<Favorite
						color={isFavoriteAcrive ? 'error' : 'action'}
						sx={{
							transitions: 'all 1s ease-in-out',
						}}
					/>
				</Button>
			</Tooltip>

			{buttons.map(({ title, icon: Icon, list }) => (
				<ToggleButton
					key={title}
					title={title}
					Icon={Icon}
					list={list}
					book={book}
				/>
			))}
		</Stack>
	);
};

export default ToggleButtons;
