import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const Philippine: PhotoPortfolioItemsType = {
	title: "PhilippineTitle",
	description: "PhilippineDescription",
	imageCover: "/assets/img/portfolio/photo/Philippine/058.webp", // 58 88
	date: "2022-11-12",
	favorite: false,
	category: "CategoryPhotography",
	imgArray: Array.from({ length: 175 }, (_, i) => ({
		id: i + 1,
		title: `Philippine - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/Philippine/${String(i + 1).padStart(
			3,
			"0"
		)}.webp`,
	})),
};
