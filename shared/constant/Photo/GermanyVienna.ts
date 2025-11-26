import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const GermanyVienna: PhotoPortfolioItemsType = {
	title: "GermanyViennaTitle",
	description: "GermanyViennaDescription",
	imageCover: "/assets/img/portfolio/photo/GermanyVienna/10.webp",
	date: "2023-07-28",
	favorite: false,
	imgArray: Array.from({ length: 20 }, (_, i) => ({
		id: i + 1,
		title: `Germany & Vienna - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/GermanyVienna/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
