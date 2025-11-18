import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const Adisz: PhotoPortfolioItemsType = {
	title: "AdiszTitle",
	description: "AdiszDescription",
	imageCover: "/assets/img/portfolio/photo/Adisz/17.webp",
	date: "2023-10-07",
	favorite: false,
	category: "CategoryPhotography",
	imgArray: Array.from({ length: 30 }, (_, i) => ({
		id: i + 1,
		title: `Adisz - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/Adisz/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
