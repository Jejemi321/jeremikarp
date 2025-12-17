import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const Refitted: PhotoPortfolioItemsType = {
	title: "RefittedTitle",
	description: "RefittedDescription",
	imageCover: "/assets/img/portfolio/photo/Refitted/029.webp",
	date: "2025-12-05",
	favorite: false,
	imgArray: Array.from({ length: 149 }, (_, i) => ({
		id: i + 1,
		title: `Refitted - ${String(i + 1).padStart(3, "0")}`,
		src: `/assets/img/portfolio/photo/Refitted/${String(i + 1).padStart(
			3,
			"0"
		)}.webp`,
	})),
};
