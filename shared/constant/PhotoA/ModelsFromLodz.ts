import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const ModelsFromLodz: PhotoPortfolioItemsType = {
	title: "ModelsFromŁódźTitle",
	description: "ModelsFromŁódźDescription",
	imageCover: "/assets/img/portfolio/photo/ModelsFromLodz/05.webp",
	date: "2023-03-18",
	favorite: false,
	category: "CategoryPhotography",
	imgArray: Array.from({ length: 15 }, (_, i) => ({
		id: i + 1,
		title: `Models from Łódź - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/ModelsFromLodz/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
