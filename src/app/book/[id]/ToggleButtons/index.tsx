'use client';

import { Book } from '@/intefaces';
import { listsSliceState } from '@/store/listsSlice';
import {
	Bookmark,
	BookmarkAdded,
	BookmarkBorder,
	Favorite,
} from '@mui/icons-material';
import { Stack } from '@mui/system';
import ToggleButton from './ToggleButton';

type ToggleButtonsProps = {
	book: Book;
};

type buttonsType = {
	title: string;
	icon: any;
	list: keyof listsSliceState;
};

const buttons: buttonsType[] = [
	{
		title: 'Favorite book',
		icon: Favorite,
		list: 'favorites',
	},
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
	return (
		<Stack
			width="100%"
			direction="row"
			justifyContent="space-evenly"
			alignItems="center"
			gap={2}
		>
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
