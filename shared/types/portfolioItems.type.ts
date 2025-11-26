export interface PortfolioItem {
	id: number;
	title: string;
	description: string;
	imageCover: string;
	date: string;
	favorite: boolean;
	fromDate?: string;
}
