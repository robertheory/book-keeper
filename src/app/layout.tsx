import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import Layout from '../components/Layout';
import AppProvider from './Context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'The Book Keeper',
	description:
		'While you revel in books, our vigilant looks, shall keep them safe in all the nooks.',
};

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
