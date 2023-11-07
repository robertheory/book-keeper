'use client';
import { BookQuery } from '@/intefaces';
import { searchBooksByText } from '@/services/book';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Menu } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import SearchResultItem from './SearchResultItem';
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
	const [bookSearchResults, setBookSearchResults] = useState<BookQuery | null>(
		null
	);

	const searchInputRef = useRef<HTMLDivElement>(null);

	const { handleSubmit, register } = useForm({
		defaultValues: {
			search: '',
		},
	});

	const onSubmit = async (data: { search: string }) => {
		const response = await searchBooksByText(data.search);

		if (response) {
			setBookSearchResults(response);
		}
	};

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

				<Search
					as="form"
					onSubmit={handleSubmit(onSubmit)}
					ref={searchInputRef}
				>
					<SearchIconWrapper>
						<SearchIcon />
					</SearchIconWrapper>
					<StyledInputBase
						placeholder="Search…"
						inputProps={{ 'aria-label': 'search' }}
						{...register('search')}
						name="search"
					/>
				</Search>

				<Menu
					id="basic-menu"
					anchorEl={searchInputRef.current}
					open={!!bookSearchResults}
					onClose={() => setBookSearchResults(null)}
					MenuListProps={{
						'aria-labelledby': 'basic-button',
					}}
				>
					{bookSearchResults?.docs.map((book) => (
						<SearchResultItem key={book.key} book={book} />
					))}
				</Menu>
			</Toolbar>
		</CustomAppBar>
	);
};

export default Appbar;
