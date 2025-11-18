import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const PhilippineLife: PhotoPortfolioItemsType = {
	title: "PhilippineLifeTitle",
	description: "PhilippineLifeDescription",
	imageCover: "/assets/img/portfolio/photo/PhilippineLife/017.webp", // 17 59
	date: "2022-11-07",
	favorite: false,
	category: "CategoryPhotography",
	imgArray: Array.from({ length: 79 }, (_, i) => ({
		id: i + 1,
		title: `Philippine Life - ${String(i + 1).padStart(3, "0")}`,
		src: `/assets/img/portfolio/photo/PhilippineLife/${String(i + 1).padStart(
			3,
			"0"
		)}.webp`,
	})),
};
