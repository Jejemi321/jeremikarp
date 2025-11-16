import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const Stanley: PhotoPortfolioItemsType = {
	title: "StanleyTitle",
	description: "StanleyDescription",
	imageCover: "/assets/img/portfolio/photo/Stanley/02.webp",
	date: "2023-07-20",
	favorite: false,
	category: "CategoryPhotography",
	imgArray: Array.from({ length: 13 }, (_, i) => ({
		id: i + 1,
		title: `Two Stanley - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/Stanley/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
