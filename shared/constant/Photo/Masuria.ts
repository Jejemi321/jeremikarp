import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const Masuria: PhotoPortfolioItemsType = {
	title: "MasuriaTitle",
	description: "MasuriaDescription",
	imageCover: "/assets/img/portfolio/photo/Masuria/05.webp",
	date: "2021-06-24",
	favorite: false,
	class: "sm:grid-cols-2 md:grid-cols-4",
	imgArray: Array.from({ length: 6 }, (_, i) => ({
		id: i + 1,
		title: `Masuria - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/Masuria/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
