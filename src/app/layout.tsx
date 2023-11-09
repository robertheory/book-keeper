import { defaultMetadata } from '@/data/constants/metadata';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import Layout from '../components/Layout';
import AppProvider from './Context';

const inter = Inter({ subsets: ['latin'] });

export const metadata = defaultMetadata;

const RootLayout = ({ children }: { children: ReactNode }) => (
	<html lang="en">
		<body className={inter.className}>
			<AppProvider>
				<Layout>{children}</Layout>
			</AppProvider>
		</body>
	</html>
);

export default RootLayout;
