import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const Łódź: PhotoPortfolioItemsType = {
	title: "ŁódźTitle",
	description: "ŁódźDescription",
	imageCover: "/assets/img/portfolio/photo/Łódź/04.webp",
	date: "2023-12-19",
	fromDate: "2020-03-21",
	favorite: true,
	category: "CategoryPhotography",
	imgArray: Array.from({ length: 56 }, (_, i) => ({
		id: i + 1,
		title: `Łódź - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/Łódź/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
