import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const RapGround: PhotoPortfolioItemsType = {
	title: "RapGroundTitle",
	description: "RapGroundDescription",
	imageCover: "/assets/img/portfolio/photo/RapGround/10.webp",
	date: "2026-01-10",
	favorite: false,
	imgArray: Array.from({ length: 36 }, (_, i) => ({
		id: i + 1,
		title: `RapGround - ${String(i + 1).padStart(3, "0")}`,
		src: `/assets/img/portfolio/photo/RapGround/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
