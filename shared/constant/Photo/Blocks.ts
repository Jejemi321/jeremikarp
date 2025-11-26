import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const Blocks: PhotoPortfolioItemsType = {
	title: "BlocksTitle",
	description: "BlocksDescription",
	imageCover: "/assets/img/portfolio/photo/Blocks/20.webp",
	date: "2023-04-02",
	favorite: false,
	imgArray: Array.from({ length: 20 }, (_, i) => ({
		id: i + 1,
		title: `Blocks - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/Blocks/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
