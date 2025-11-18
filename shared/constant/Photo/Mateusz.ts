import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const Mateusz: PhotoPortfolioItemsType = {
	title: "MateuszTitle",
	description: "MateuszDescription",
	imageCover: "/assets/img/portfolio/photo/Mateusz/01.webp",
	date: "2023-09-01",
	favorite: false,
	category: "CategoryPhotography",
	imgArray: Array.from({ length: 10 }, (_, i) => ({
		id: i + 1,
		title: `Mateusz - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/Mateusz/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
