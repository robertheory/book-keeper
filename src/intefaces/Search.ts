export interface BooksQuery {
	kind: string;
	totalItems: number;
	items: BooksQueryItem[];
}

export interface BooksQueryItem {
	kind: string;
	id: string;
	etag: string;
	selfLink: string;
	volumeInfo: BooksQueryVolumeInfo;
	saleInfo: BooksQuerySaleInfo;
	accessInfo: BooksQueryAccessInfo;
	searchInfo: BooksQuerySearchInfo;
}

export interface BooksQueryVolumeInfo {
	title: string;
	authors: string[];
	publisher?: string;
	publishedDate: string;
	description: string;
	industryIdentifiers: BooksQueryIndustryIdentifier[];
	readingModes: BooksQueryReadingModes;
	pageCount: number;
	printType: string;
	categories: string[];
	averageRating?: number;
	ratingsCount?: number;
	maturityRating: string;
	allowAnonLogging: boolean;
	contentVersion: string;
	panelizationSummary: BooksQueryPanelizationSummary;
	imageLinks: BooksQueryImageLinks;
	language: string;
	previewLink: string;
	infoLink: string;
	canonicalVolumeLink: string;
	subtitle?: string;
}

export interface BooksQueryIndustryIdentifier {
	type: string;
	identifier: string;
}

export interface BooksQueryReadingModes {
	text: boolean;
	image: boolean;
}

export interface BooksQueryPanelizationSummary {
	containsEpubBubbles: boolean;
	containsImageBubbles: boolean;
}

export interface BooksQueryImageLinks {
	smallThumbnail: string;
	thumbnail: string;
}

export interface BooksQuerySaleInfo {
	country: string;
	saleability: string;
	isEbook: boolean;
	listPrice?: BooksQuerySaleInfoListPrice;
	retailPrice?: BooksQuerySaleInfoRetailPrice;
	buyLink?: string;
	offers?: BooksQueryOffer[];
}

export interface BooksQuerySaleInfoListPrice {
	amount: number;
	currencyCode: string;
}

export interface BooksQuerySaleInfoRetailPrice {
	amount: number;
	currencyCode: string;
}

export interface BooksQueryOffer {
	finskyOfferType: number;
	listPrice: BooksQueryOffer;
	retailPrice: BooksQueryOfferRetailPrice;
	giftable: boolean;
}

export interface BooksQueryOfferListPrice {
	amountInMicros: number;
	currencyCode: string;
}

export interface BooksQueryOfferRetailPrice {
	amountInMicros: number;
	currencyCode: string;
}

export interface BooksQueryAccessInfo {
	country: string;
	viewability: string;
	embeddable: boolean;
	publicDomain: boolean;
	textToSpeechPermission: string;
	epub: BooksQueryEpub;
	pdf: BooksQueryPdf;
	webReaderLink: string;
	accessViewStatus: string;
	quoteSharingAllowed: boolean;
}

export interface BooksQueryEpub {
	isAvailable: boolean;
	acsTokenLink?: string;
}

export interface BooksQueryPdf {
	isAvailable: boolean;
	acsTokenLink?: string;
}

export interface BooksQuerySearchInfo {
	textSnippet: string;
}
