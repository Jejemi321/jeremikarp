import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const Philocaly: PhotoPortfolioItemsType = {
	title: "PhilocalyTitle",
	description: "PhilocalyDescription",
	imageCover: "/assets/img/portfolio/photo/Philocaly/05.webp",
	date: "2024-11-03",
	favorite: false,
	category: "CategoryPhotography",
	imgArray: Array.from({ length: 10 }, (_, i) => ({
		id: i + 1,
		title: `Philocaly - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/Philocaly/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
