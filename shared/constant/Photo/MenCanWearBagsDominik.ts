import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const MenCanWearBagsDominik: PhotoPortfolioItemsType = {
	title: "MenCanWearBagsDominikTitle",
	description: "MenCanWearBagsDominikDescription",
	imageCover: "/assets/img/portfolio/photo/MenCanWearBagsDominik/01.webp",
	date: "2026-01-06",
	favorite: false,
	imgArray: Array.from({ length: 10 }, (_, i) => ({
		id: i + 1,
		title: `MenCanWearBagsDominik - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/MenCanWearBagsDominik/${String(
			i + 1
		).padStart(2, "0")}.webp`,
	})),
};
