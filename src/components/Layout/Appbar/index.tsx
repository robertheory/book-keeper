'use client';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
	CustomAppBar,
	Search,
	SearchIconWrapper,
	StyledInputBase,
} from './styles';

type AppbarProps = {
	isOpen: boolean;
	handleDrawerOpen: () => void;
};

const Appbar = ({ isOpen, handleDrawerOpen }: AppbarProps) => {
	return (
		<CustomAppBar position="fixed" open={isOpen}>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					onClick={handleDrawerOpen}
					edge="start"
					sx={{ mr: 2, ...(isOpen && { display: 'none' }) }}
				>
					<MenuIcon />
				</IconButton>
				<Typography
					variant="h6"
					noWrap
					component="div"
					sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
				>
					The Book Keeper
				</Typography>

				<Search>
					<SearchIconWrapper>
						<SearchIcon />
					</SearchIconWrapper>
					<StyledInputBase
						placeholder="Search…"
						inputProps={{ 'aria-label': 'search' }}
					/>
				</Search>
			</Toolbar>
		</CustomAppBar>
	);
};

export default Appbar;
