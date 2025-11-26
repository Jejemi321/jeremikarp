import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const Lodz01: PhotoPortfolioItemsType = {
	title: "Łódź01Title",
	description: "Łódź01Description",
	imageCover: "/assets/img/portfolio/photo/Łódź01/51.webp",
	date: "2023-05-03",
	fromDate: "2021-12-02",
	favorite: false,
	imgArray: Array.from({ length: 62 }, (_, i) => ({
		id: i + 1,
		title: `Łódź01 - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/Łódź01/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
