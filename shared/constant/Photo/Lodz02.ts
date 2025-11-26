import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const Lodz02: PhotoPortfolioItemsType = {
	title: "Łódź02Title",
	description: "Łódź02Description",
	imageCover: "/assets/img/portfolio/photo/Łódź02/07.webp",
	date: "2025-06-19",
	favorite: false,
	imgArray: Array.from({ length: 10 }, (_, i) => ({
		id: i + 1,
		title: `Łódź02 - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/Łódź02/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
