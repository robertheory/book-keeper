'use client';

import { ReduxProvider } from '@/store/ReduxProvider';
import { global } from '@/styles/globalStyles';
import { theme } from '@/styles/theme';
import { GlobalStyles, ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';

interface IAppProviderProps {
	children: ReactNode;
}

const AppProvider = ({ children }: IAppProviderProps) => (
	<ThemeProvider theme={theme}>
		<GlobalStyles styles={global.styles} />
		<ReduxProvider>{children}</ReduxProvider>
	</ThemeProvider>
);

export default AppProvider;
