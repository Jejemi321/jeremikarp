import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const Cygary: PhotoPortfolioItemsType = {
	title: "CygaryTitle",
	description: "CygaryDescription",
	imageCover: "/assets/img/portfolio/photo/Cygary/20.webp",
	date: "2023-09-19",
	favorite: false,
	category: "CategoryPhotography",
	imgArray: Array.from({ length: 89 }, (_, i) => ({
		id: i + 1,
		title: `Cygary - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/Cygary/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
