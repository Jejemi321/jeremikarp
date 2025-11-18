import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const Staircase: PhotoPortfolioItemsType = {
	title: "StaircaseTitle",
	description: "StaircaseDescription",
	imageCover: "/assets/img/portfolio/photo/Staircase/05.webp",
	date: "2023-03-15",
	favorite: false,
	category: "CategoryPhotography",
	imgArray: Array.from({ length: 11 }, (_, i) => ({
		id: i + 1,
		title: `Staircase - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/Staircase/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
