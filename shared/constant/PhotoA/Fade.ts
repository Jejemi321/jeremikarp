import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const Fade: PhotoPortfolioItemsType = {
	title: "FadeTitle",
	description: "FadeDescription",
	imageCover: "/assets/img/portfolio/photo/Fade/06.webp",
	date: "2023-05-03",
	favorite: false,
	category: "CategoryPhotography",
	imgArray: Array.from({ length: 7 }, (_, i) => ({
		id: i + 1,
		title: `Fade - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/Fade/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
