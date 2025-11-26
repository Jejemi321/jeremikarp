import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const NightDemon: PhotoPortfolioItemsType = {
	title: "NightDemonTitle",
	description: "NightDemonDescription",
	imageCover: "/assets/img/portfolio/photo/NightDemon/21.webp",
	date: "2023-11-15",
	favorite: false,
	imgArray: Array.from({ length: 22 }, (_, i) => ({
		id: i + 1,
		title: `NightDemon - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/NightDemon/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
