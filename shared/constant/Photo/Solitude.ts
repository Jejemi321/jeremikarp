import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const Solitude: PhotoPortfolioItemsType = {
	title: "SolitudeTitle",
	description: "SolitudeDescription",
	imageCover: "/assets/img/portfolio/photo/Solitude/01.webp",
	date: "2023-06-11",
	favorite: false,
	category: "CategoryPhotography",
	imgArray: Array.from({ length: 7 }, (_, i) => ({
		id: i + 1,
		title: `Solitude - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/Solitude/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
