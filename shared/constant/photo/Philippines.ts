import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const Philippines: PhotoPortfolioItemsType = {
	title: "PhilippinesTitle",
	description: "PhilippinesDescription",
	imageCover: "/assets/img/portfolio/photo/Philippines/090.webp",
	date: "2022-11-12",
	fromDate: "2021-06-24",
	favorite: false,
	category: "CategoryPhotography",
	imgArray: Array.from({ length: 120 }, (_, i) => ({
		id: i + 1,
		title: `Philippines - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/Philippines/${String(i + 1).padStart(
			3,
			"0"
		)}.webp`,
	})),
};
