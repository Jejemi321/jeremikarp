import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const Warsaw02: PhotoPortfolioItemsType = {
	title: "Warsaw02Title",
	description: "Warsaw02Description",
	imageCover: "/assets/img/portfolio/photo/Warsaw02/13.webp",
	date: "2025-05-28",
	favorite: false,
	imgArray: Array.from({ length: 17 }, (_, i) => ({
		id: i + 1,
		title: `Warsaw02 - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/Warsaw02/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
