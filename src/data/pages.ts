import {
	Bookmark,
	BookmarkAdded,
	BookmarkBorder,
	Favorite,
} from '@mui/icons-material';

export const menuItems = [
	{
		text: 'Favorites',
		icon: Favorite,
		path: '/favorites',
	},
	{
		text: 'To Read',
		icon: BookmarkBorder,
		path: '/to-read',
	},
	{
		text: 'Reading',
		icon: Bookmark,
		path: '/reading',
	},
	{
		text: 'Read',
		icon: BookmarkAdded,
		path: '/read',
	},
];
