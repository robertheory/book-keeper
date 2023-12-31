'use client';

import { menuItems } from '@/data/pages';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import MaterialDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled, useTheme } from '@mui/material/styles';
import Link from 'next/link';
import { createElement } from 'react';

const drawerWidth = 240;

export const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
}));

type DrawerProps = {
	isOpen: boolean;
	handleDrawerClose: () => void;
};

const Drawer = ({ handleDrawerClose, isOpen }: DrawerProps) => {
	const theme = useTheme();

	return (
		<MaterialDrawer
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: drawerWidth,
					boxSizing: 'border-box',
				},
			}}
			variant="persistent"
			anchor="left"
			open={isOpen}
		>
			<DrawerHeader>
				<IconButton onClick={handleDrawerClose}>
					{theme.direction === 'ltr' ? (
						<ChevronLeftIcon />
					) : (
						<ChevronRightIcon />
					)}
				</IconButton>
			</DrawerHeader>
			<Divider />
			<List>
				{menuItems.map(({ text, icon, path }) => (
					<Link
						key={text}
						href={path}
						passHref
						style={{
							textDecoration: 'none',
							color: 'inherit',
						}}
					>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>{createElement(icon)}</ListItemIcon>
								<ListItemText primary={text} />
							</ListItemButton>
						</ListItem>
					</Link>
				))}
			</List>
		</MaterialDrawer>
	);
};

export default Drawer;
