// eslint-disable-next-line import/extensions
import BookDetails from '@/components/BookDetails';
// eslint-disable-next-line import/extensions
import notFoundPhrases from '@/data/notFoundPhrases.json';
import { getBookById } from '@/services/book';
import { escapeHtml } from '@/utils/formatting';

type BookProps = { params: { id: string } };

export async function generateMetadata({ params: { id } }: BookProps) {
	const book = await getBookById(id);

	const index = Math.floor(Math.random() * notFoundPhrases.length);

	const descriptionNotFoundText = notFoundPhrases[index];

	const siteURL = `${process.env.VERCEL_URL}/book/${id}`;

	if (!book) {
		return {
			title: `Book Not Found`,
			description: descriptionNotFoundText,
			image: 'https://dummyimage.com/200x300/a6a6a6/ffffff.png&text=No+image',
			type: 'website',
			url: `${process.env.VERCEL_URL}/book/${id}`,
			site_name: 'The Book Keeper',
			cardType: 'summary_large_image',
			robots: 'index, follow',
			googlebot: 'index, follow',
			google: 'notranslate',
			rating: 'general',
			referrer: 'origin',
			revisitAfter: '7 days',
			openGraph: {
				title: `Book Not Found`,
				description: descriptionNotFoundText,
				image: 'https://dummyimage.com/200x300/a6a6a6/ffffff.png&text=No+image',
				type: 'website',
				url: `${process.env.VERCEL_URL}/book/${id}`,
				site_name: 'The Book Keeper',
			},
			twitter: {
				title: `Book Not Found`,
				description: descriptionNotFoundText,
				image: 'https://dummyimage.com/200x300/a6a6a6/ffffff.png&text=No+image',
				handle: '@appbookeeper',
				site: '@appbookeeper',
				cardType: 'summary_large_image',
			},
		};
	}

	const { title } = book;

	const image =
		book.image ||
		'https://dummyimage.com/200x300/a6a6a6/ffffff.png&text=No+image';

	const twitter = '@appbookeeper';

	const description = book.description
		? escapeHtml(book.description)
		: `No description available \n ${descriptionNotFoundText}
		`;

	return {
		title: `${title} | The Book Keeper`,
		description,
		openGraph: {
			title,
			description,
			image,
			type: 'website',
			url: siteURL,
			site_name: 'The Book Keeper',
		},
		twitter: {
			handle: twitter,
			site: twitter,
			cardType: 'summary_large_image',
		},
		robots: 'index, follow',
		googlebot: 'index, follow',
		google: 'notranslate',
		rating: 'general',
		referrer: 'origin',
		revisitAfter: '7 days',
	};
}

const Book = async ({ params: { id: bookId } }: BookProps) => {
	const book = await getBookById(bookId);

	if (!book) {
		return {
			redirect: {
				destination: '/404',
				permanent: false,
			},
		};
	}

	return <BookDetails book={book} />;
};

export default Book;
