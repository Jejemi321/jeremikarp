import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const Rooftop: PhotoPortfolioItemsType = {
	title: "RooftopTitle",
	description: "RooftopDescription",
	imageCover: "/assets/img/portfolio/photo/Rooftop/13.webp",
	date: "2023-06-15",
	favorite: false,
	category: "CategoryPhotography",
	imgArray: Array.from({ length: 13 }, (_, i) => ({
		id: i + 1,
		title: `Rooftop - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/Rooftop/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
