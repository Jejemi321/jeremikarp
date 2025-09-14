import { CategoryType } from "./const";
import PhotoPortfolioItems, {
	PhotoPortfolioItemsType,
} from "./PhotoPortfolioItems";
import WebPortfolioItems, { WebPortfolioItemType } from "./WebPortfolioItems";

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

export type PortfolioItemType =
	| (WebPortfolioItemType & { id: number })
	| (PhotoPortfolioItemsType & { id: number });

export const PortfolioItems: PortfolioItemType[] = [
	...webWithIds,
	...photoWithIds,
];
