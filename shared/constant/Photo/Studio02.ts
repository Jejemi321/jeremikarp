import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const Studio02: PhotoPortfolioItemsType = {
	title: "Studio02Title",
	description: "Studio02Description",
	imageCover: "/assets/img/portfolio/photo/Studio02/09.webp",
	date: "2024-11-02",
	favorite: false,
	imgArray: Array.from({ length: 50 }, (_, i) => ({
		id: i + 1,
		title: `Studio02 - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/Studio02/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
