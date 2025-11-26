import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const Winter: PhotoPortfolioItemsType = {
	title: "WinterTitle",
	description: "WinterDescription",
	imageCover: "/assets/img/portfolio/photo/Winter/03.webp",
	date: "2021-01-18",
	class: "sm:grid-cols-2 md:grid-cols-4",
	favorite: false,
	imgArray: Array.from({ length: 24 }, (_, i) => ({
		id: i + 1,
		title: `Winter - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/Winter/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
