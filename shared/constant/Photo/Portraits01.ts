import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const Portraits01: PhotoPortfolioItemsType = {
	title: "Portraits01Title",
	description: "Portraits01Description",
	imageCover: "/assets/img/portfolio/photo/Portraits01/07.webp",
	date: "2025-11-05",
	favorite: false,
	imgArray: Array.from({ length: 10 }, (_, i) => ({
		id: i + 1,
		title: `Portraits01 - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/Portraits01/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
