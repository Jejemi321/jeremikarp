import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const Studio01: PhotoPortfolioItemsType = {
	title: "Studio01Title",
	description: "Studio01Description",
	imageCover: "/assets/img/portfolio/photo/Studio1/14.webp",
	date: "2024-06-04",
	favorite: false,
	imgArray: Array.from({ length: 24 }, (_, i) => ({
		id: i + 1,
		title: `Studio01 - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/Studio1/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
