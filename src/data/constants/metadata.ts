import { Metadata } from 'next';
import { siteURL } from '.';

const title = 'The Book Keeper';

const description = `While you revel in books, our vigilant looks, shall keep them safe in all the nooks.`;

const image =
	'https://dummyimage.com/400x200/a6a6a6/ffffff.png&text=The%20Book%20Keeper';

export const defaultMetadata: Metadata = {
	manifest: '/manifest.json',
	title,
	icons: [
		{
			url: '/logo.webp',
			sizes: '192x192',
			type: 'image/webp',
		},
	],
	description,
	robots: 'index, follow',
	referrer: 'origin',
	openGraph: {
		title,
		description,
		images: [
			{
				url: image,
				width: 400,
				height: 200,
				alt: 'The Book Keeper',
			},
		],
		type: 'website',
		url: siteURL,
		siteName: 'The Book Keeper',
	},
	twitter: {
		title,
		description,
		images: [
			{
				url: image,
				width: 400,
				height: 200,
				alt: 'The Book Keeper',
			},
		],
		site: '@appbookeeper',
	},
};
