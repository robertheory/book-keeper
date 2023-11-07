'use client';

import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import Appbar from './Appbar';
import Drawer, { DrawerHeader } from './Drawer';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
	open?: boolean;
}>(({ theme, open }) => ({
	flexGrow: 1,
	padding: theme.spacing(3),
	transition: theme.transitions.create('margin', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	marginLeft: `-${drawerWidth}px`,
	...(open && {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	}),
}));

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	const [isOpen, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />

			<Appbar handleDrawerOpen={handleDrawerOpen} isOpen={isOpen} />

			<Drawer handleDrawerClose={handleDrawerClose} isOpen={isOpen} />

			<Main open={isOpen}>
				<DrawerHeader />
				<Stack
					width="100%"
					direction="column"
					justifyContent="flex-start"
					alignItems="center"
				>
					<Stack
						width="100%"
						maxWidth="800px"
						direction="column"
						justifyContent="flex-start"
						alignItems="center"
					>
						{children}
					</Stack>
				</Stack>
			</Main>
		</Box>
	);
};

export default Layout;
