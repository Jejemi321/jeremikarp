import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const HalasConcert: PhotoPortfolioItemsType = {
	title: "HalasConcertTitle",
	description: "HalasConcertDescription",
	imageCover: "/assets/img/portfolio/photo/HalasConcert/11.webp",
	date: "2025-12-20",
	favorite: false,
	imgArray: Array.from({ length: 18 }, (_, i) => ({
		id: i + 1,
		title: `HAŁAS (Concert) - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/HalasConcert/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
