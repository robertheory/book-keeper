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
	volumeInfo: VolumeInfo;
	saleInfo: SaleInfo;
	accessInfo: AccessInfo;
	searchInfo: SearchInfo;
}

export interface VolumeInfo {
	title: string;
	authors: string[];
	publisher?: string;
	publishedDate: string;
	description: string;
	industryIdentifiers: IndustryIdentifier[];
	readingModes: ReadingModes;
	pageCount: number;
	printType: string;
	categories: string[];
	averageRating?: number;
	ratingsCount?: number;
	maturityRating: string;
	allowAnonLogging: boolean;
	contentVersion: string;
	panelizationSummary: PanelizationSummary;
	imageLinks: ImageLinks;
	language: string;
	previewLink: string;
	infoLink: string;
	canonicalVolumeLink: string;
	subtitle?: string;
}

export interface IndustryIdentifier {
	type: string;
	identifier: string;
}

export interface ReadingModes {
	text: boolean;
	image: boolean;
}

export interface PanelizationSummary {
	containsEpubBubbles: boolean;
	containsImageBubbles: boolean;
}

export interface ImageLinks {
	smallThumbnail: string;
	thumbnail: string;
}

export interface SaleInfo {
	country: string;
	saleability: string;
	isEbook: boolean;
	listPrice?: SaleInfoListPrice;
	retailPrice?: SaleInfoRetailPrice;
	buyLink?: string;
	offers?: Offer[];
}

export interface SaleInfoListPrice {
	amount: number;
	currencyCode: string;
}

export interface SaleInfoRetailPrice {
	amount: number;
	currencyCode: string;
}

export interface Offer {
	finskyOfferType: number;
	listPrice: Offer;
	retailPrice: OfferRetailPrice;
	giftable: boolean;
}

export interface OfferListPrice {
	amountInMicros: number;
	currencyCode: string;
}

export interface OfferRetailPrice {
	amountInMicros: number;
	currencyCode: string;
}

export interface AccessInfo {
	country: string;
	viewability: string;
	embeddable: boolean;
	publicDomain: boolean;
	textToSpeechPermission: string;
	epub: Epub;
	pdf: Pdf;
	webReaderLink: string;
	accessViewStatus: string;
	quoteSharingAllowed: boolean;
}

export interface Epub {
	isAvailable: boolean;
	acsTokenLink?: string;
}

export interface Pdf {
	isAvailable: boolean;
	acsTokenLink?: string;
}

export interface SearchInfo {
	textSnippet: string;
}
