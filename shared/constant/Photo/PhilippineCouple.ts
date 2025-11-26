import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const PhilippineCouple: PhotoPortfolioItemsType = {
	title: "PhilippineCoupleTitle",
	description: "PhilippineCoupleDescription",
	imageCover: "/assets/img/portfolio/photo/PhilippineCouple/35.webp",
	date: "2022-11-12",
	favorite: false,
	imgArray: Array.from({ length: 48 }, (_, i) => ({
		id: i + 1,
		title: `PhilippineCouple - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/PhilippineCouple/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
