'use client';

import { createTheme, ThemeOptions } from '@mui/material';
import { ptBR } from '@mui/material/locale';

export const themeOptions: ThemeOptions = {
	palette: {
		mode: 'light',
		primary: {
			main: '#faef91',
		},
		secondary: {
			main: '#fafafa',
		},
		background: {
			default: '#fafafa',
		},
		text: {
			primary: '#575757',
			secondary: '#faef91',
		},
	},
	typography: {
		fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
	},
};

export const theme = createTheme(themeOptions, ptBR);
