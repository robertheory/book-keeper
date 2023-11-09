'use client';
import useDebounce from '@/app/Context/useDebounce';
import { BooksQuery } from '@/intefaces';
import { searchBooksByText } from '@/services/book';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Menu } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ChangeEvent, useRef, useState } from 'react';
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
	const { debounce } = useDebounce();

	const [searchText, setSearchText] = useState<string>('');
	const [bookSearchResults, setBookSearchResults] = useState<BooksQuery | null>(
		null
	);

	const searchFormRef = useRef<HTMLDivElement>(null);

	const onSubmit = async (data: { search: string }) => {
		const response = await searchBooksByText(data.search);

		if (response) {
			setBookSearchResults(response);
		}
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchText(event.target.value);

		if (event.target.value.length > 2)
			debounce(onSubmit, 1000)({ search: event.target.value });
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

				<Search ref={searchFormRef}>
					<SearchIconWrapper>
						<SearchIcon color="action" />
					</SearchIconWrapper>
					<StyledInputBase
						name="search"
						placeholder="Search…"
						inputProps={{ 'aria-label': 'search' }}
						autoComplete="off"
						value={searchText}
						onChange={handleChange}
					/>
				</Search>

				<Menu
					id="results-menu"
					anchorEl={searchFormRef.current}
					open={!!bookSearchResults}
					onClose={() => setBookSearchResults(null)}
					MenuListProps={{
						'aria-labelledby': 'results-menu',
					}}
				>
					{bookSearchResults?.items.map((book) => (
						<SearchResultItem
							key={book.id}
							book={book}
							handleClear={() => setBookSearchResults(null)}
						/>
					))}
				</Menu>
			</Toolbar>
		</CustomAppBar>
	);
};

export default Appbar;
