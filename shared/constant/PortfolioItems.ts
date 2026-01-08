import { CategoryType } from "../types";
import PhotoPortfolioItems, {
	PhotoPortfolioItemsType,
} from "./PhotoPortfolioItems";
import VideoPortfolioItems, {
	VideoPortfolioItemsType,
} from "./VideoPortfolioItems";
import WebPortfolioItems, { WebPortfolioItemType } from "./WebPortfolioItems";

const portfolioData = [
	{ items: WebPortfolioItems, category: "CategoryWebsite" as CategoryType },
	{
		items: PhotoPortfolioItems,
		category: "CategoryPhotography" as CategoryType,
	},
	{ items: VideoPortfolioItems, category: "CategoryVideo" as CategoryType },
];

export type PortfolioItemType =
	| (WebPortfolioItemType & { id: number; category: CategoryType })
	| (PhotoPortfolioItemsType & { id: number; category: CategoryType })
	| (VideoPortfolioItemsType & { id: number; category: CategoryType });

const ID_OFFSETS: Record<CategoryType, number> = {
	CategoryWebsite: 1,
	CategoryVideo: 500,
	CategoryPhotography: 1000,
};

const currentCounters = { ...ID_OFFSETS };

export const PortfolioItems: PortfolioItemType[] = portfolioData.flatMap(
	({ items, category }) =>
		items.map(item => {
			const id = currentCounters[category]++;

			return {
				...item,
				id,
				category,
			};
		})
);
