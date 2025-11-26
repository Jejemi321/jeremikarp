import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const Warsaw01: PhotoPortfolioItemsType = {
	title: "warsaw01Title",
	description: "warsaw01Description",
	imageCover: "/assets/img/portfolio/photo/warsaw01/06.webp",
	date: "2023-12-08",
	favorite: true,
	imgArray: Array.from({ length: 9 }, (_, i) => ({
		id: i + 1,
		title: `Warsaw01 - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/warsaw01/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
