import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const Cracow: PhotoPortfolioItemsType = {
	title: "CracowTitle",
	description: "CracowDescription",
	imageCover: "/assets/img/portfolio/photo/Cracow/04.webp",
	date: "2023-05-26",
	favorite: false,
	imgArray: Array.from({ length: 22 }, (_, i) => ({
		id: i + 1,
		title: `Cracow - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/Cracow/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
