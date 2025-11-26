import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const Zakopane: PhotoPortfolioItemsType = {
	title: "ZakopaneTitle",
	description: "ZakopaneDescription",
	imageCover: "/assets/img/portfolio/photo/Zakopane/07.webp",
	date: "2023-08-12",
	favorite: false,
	imgArray: Array.from({ length: 14 }, (_, i) => ({
		id: i + 1,
		title: `Zakopane - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/Zakopane/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
