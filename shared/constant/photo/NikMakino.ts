import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const NikMakino: PhotoPortfolioItemsType = {
	title: "NikMakinoTitle",
	description: "NikMakinoDescription",
	imageCover: "/assets/img/portfolio/photo/NikMakino/01.webp",
	date: "2022-06-26",
	favorite: false,
	category: "CategoryPhotography",
	imgArray: Array.from({ length: 14 }, (_, i) => ({
		id: i + 1,
		title: `Nik Makino - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/NikMakino/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
