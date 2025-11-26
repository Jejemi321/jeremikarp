import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const PhilippineAnimals: PhotoPortfolioItemsType = {
	title: "PhilippineAnimalsTitle",
	description: "PhilippineAnimalsDescription",
	imageCover: "/assets/img/portfolio/photo/PhilippineAnimals/09.webp",
	date: "2022-12-03",
	favorite: false,
	imgArray: Array.from({ length: 19 }, (_, i) => ({
		id: i + 1,
		title: `Philippine Animals - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/PhilippineAnimals/${String(
			i + 1
		).padStart(2, "0")}.webp`,
	})),
};
