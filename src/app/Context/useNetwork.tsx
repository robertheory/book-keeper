import { useSnackbar } from 'notistack';
import { ReactNode, createContext, useEffect } from 'react';

export const NetworkContext = createContext({});

export const NetworkProvider = ({ children }: { children: ReactNode }) => {
	const { enqueueSnackbar } = useSnackbar();

	useEffect(() => {
		addEventListener('online', () => {
			enqueueSnackbar('You are online', {
				variant: 'success',
				preventDuplicate: true,
			});
		});

		addEventListener('offline', () => {
			enqueueSnackbar('You are offline', {
				variant: 'error',
				preventDuplicate: true,
				persist: true,
			});
		});

		return () => {
			removeEventListener('online', () => {});

			removeEventListener('offline', () => {});
		};
	}, [enqueueSnackbar]);

	return (
		<NetworkContext.Provider value={{}}>{children}</NetworkContext.Provider>
	);
};
