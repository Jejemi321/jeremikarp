import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const Skyscraper: PhotoPortfolioItemsType = {
	title: "SkyscraperTitle",
	description: "SkyscraperDescription",
	imageCover: "/assets/img/portfolio/photo/Skyscraper/10.webp",
	date: "2023-09-01",
	favorite: false,
	category: "CategoryPhotography",
	imgArray: Array.from({ length: 15 }, (_, i) => ({
		id: i + 1,
		title: `Skyscraper - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/Skyscraper/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
