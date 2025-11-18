import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const Iga: PhotoPortfolioItemsType = {
	title: "IgaTitle",
	description: "IgaDescription",
	imageCover: "/assets/img/portfolio/photo/Iga/15.webp",
	date: "2025-11-14",
	favorite: false,
	category: "CategoryPhotography",
	imgArray: Array.from({ length: 28 }, (_, i) => ({
		id: i + 1,
		title: `Iga - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/Iga/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
