import { CategoryType } from "../types";
import PhotoPortfolioItems, {
	PhotoPortfolioItemsType,
} from "./PhotoPortfolioItems";
import VideoPortfolioItems, {
	VideoPortfolioItemsType,
} from "./VideoPortfolioItems";
import WebPortfolioItems, { WebPortfolioItemType } from "./WebPortfolioItems";

// Mapowanie tablic na kategorie
const portfolioData = [
	{ items: WebPortfolioItems, category: "CategoryWebsite" as CategoryType },
	{
		items: PhotoPortfolioItems,
		category: "CategoryPhotography" as CategoryType,
	},
	{ items: VideoPortfolioItems, category: "CategoryVideo" as CategoryType },
];

let currentId = 1;

export type PortfolioItemType =
	| (WebPortfolioItemType & { id: number; category: CategoryType })
	| (PhotoPortfolioItemsType & { id: number; category: CategoryType })
	| (VideoPortfolioItemsType & { id: number; category: CategoryType });

export const PortfolioItems: PortfolioItemType[] = portfolioData.flatMap(
	({ items, category }) =>
		items.map(item => ({
			...item,
			id: currentId++,
			category,
		}))
);
