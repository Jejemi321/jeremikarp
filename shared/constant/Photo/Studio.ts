import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const Studio: PhotoPortfolioItemsType = {
	title: "StudioTitle",
	description: "StudioDescription",
	imageCover: "/assets/img/portfolio/photo/Studio/10.webp",
	date: "2024-03-09",
	favorite: false,
	imgArray: Array.from({ length: 17 }, (_, i) => ({
		id: i + 1,
		title: `Studio - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/Studio/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
