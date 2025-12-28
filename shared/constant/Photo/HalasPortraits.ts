import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const HalasPortraits: PhotoPortfolioItemsType = {
	title: "HalasPortraitsTitle",
	description: "HalasPortraitsDescription",
	imageCover: "/assets/img/portfolio/photo/HalasPortraits/05.webp",
	date: "2025-12-20",
	favorite: false,
	imgArray: Array.from({ length: 18 }, (_, i) => ({
		id: i + 1,
		title: `HAŁAS (Portraits) - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/HalasPortraits/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
