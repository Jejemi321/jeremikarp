import { CategoryType } from "./const";
import PhotoPortfolioItems from "./PhotoPortfolioItems";
import WebPortfolioItems from "./WebPortfolioItems";

export interface PortfolioItem {
	id: number;
	title: string;
	description: string;
	imageCover: string;
	date: string;
	favorite: boolean;
	category: CategoryType;
}

// Assign IDs automatically
const webWithIds = WebPortfolioItems.map((item, idx) => ({
	...item,
	id: idx + 1,
}));
const photoWithIds = PhotoPortfolioItems.map((item, idx) => ({
	...item,
	id: webWithIds.length + idx + 1,
}));

export const PortfolioItems: PortfolioItem[] = [...webWithIds, ...photoWithIds];

export type PortfolioItemType = (typeof PortfolioItems)[number];
