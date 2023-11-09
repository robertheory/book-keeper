'use client';

import { ReduxProvider } from '@/store/ReduxProvider';
import { global } from '@/styles/globalStyles';
import { theme } from '@/styles/theme';
import { GlobalStyles, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { ReactNode, useEffect } from 'react';
import { registerServiceWorker } from './registerServiceWorker';
import { NetworkProvider } from './useNetwork';

interface IAppProviderProps {
	children: ReactNode;
}

registerServiceWorker();

const AppProvider = ({ children }: IAppProviderProps) => {
	useEffect(() => {
		// detect  network change
		addEventListener('online', () => {
			console.log('online');
		});

		addEventListener('offline', () => {
			console.log('offline');
		});
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles styles={global.styles} />
			<ReduxProvider>
				<SnackbarProvider
					anchorOrigin={{
						horizontal: 'left',
						vertical: 'bottom',
					}}
				>
					<NetworkProvider>{children}</NetworkProvider>
				</SnackbarProvider>
			</ReduxProvider>
		</ThemeProvider>
	);
};

export default AppProvider;
