import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const Skate: PhotoPortfolioItemsType = {
	title: "SkateTitle",
	description: "SkateDescription",
	imageCover: "/assets/img/portfolio/photo/Skate/36.webp",
	class: "sm:grid-cols-2 md:grid-cols-4",
	date: "2022-10-09",
	favorite: false,
	imgArray: Array.from({ length: 53 }, (_, i) => ({
		id: i + 1,
		title: `Skate - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/Skate/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
