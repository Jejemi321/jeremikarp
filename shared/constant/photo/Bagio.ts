import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const Bagio: PhotoPortfolioItemsType = {
	title: "BagioTitle",
	description: "BagioDescription",
	imageCover: "/assets/img/portfolio/photo/Bagio/56.webp",
	date: "2022-06-12",
	favorite: false,
	category: "CategoryPhotography",
	imgArray: Array.from({ length: 65 }, (_, i) => ({
		id: i + 1,
		title: `Bagio - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/Bagio/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
