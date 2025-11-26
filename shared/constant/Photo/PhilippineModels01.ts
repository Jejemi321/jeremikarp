import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const PhilippineModels01: PhotoPortfolioItemsType = {
	title: "PhilippineModels01Title",
	description: "PhilippineModels01Description",
	imageCover: "/assets/img/portfolio/photo/PhilippineModels01/11.webp",
	date: "2022-10-02",

	favorite: false,
	imgArray: Array.from({ length: 50 }, (_, i) => ({
		id: i + 1,
		title: `Philippine Models 01 - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/PhilippineModels01/${String(
			i + 1
		).padStart(2, "0")}.webp`,
	})),
};
