import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const Nikola: PhotoPortfolioItemsType = {
	title: "NikolaTitle",
	description: "NikolaDescription",
	imageCover: "/assets/img/portfolio/photo/Nikola/07.webp",
	date: "2022-10-19",
	favorite: false,
	category: "CategoryPhotography",
	imgArray: Array.from({ length: 10 }, (_, i) => ({
		id: i + 1,
		title: `Nikola - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/Nikola/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
