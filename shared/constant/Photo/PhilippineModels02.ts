import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const PhilippineModels02: PhotoPortfolioItemsType = {
	title: "PhilippineModels02Title",
	description: "PhilippineModels02Description",
	imageCover: "/assets/img/portfolio/photo/PhilippineModels02/06.webp",
	date: "2022-12-10",
	favorite: false,
	imgArray: Array.from({ length: 10 }, (_, i) => ({
		id: i + 1,
		title: `Philippine Models 02 - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/PhilippineModels02/${String(
			i + 1
		).padStart(2, "0")}.webp`,
	})),
};
