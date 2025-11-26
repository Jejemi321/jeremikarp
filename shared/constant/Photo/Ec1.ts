import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const Ec1: PhotoPortfolioItemsType = {
	title: "Ec1Title",
	description: "Ec1Description",
	imageCover: "/assets/img/portfolio/photo/Ec1/03.webp",
	date: "2023-03-17",
	favorite: false,
	imgArray: Array.from({ length: 18 }, (_, i) => ({
		id: i + 1,
		title: `Ec1 - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/Ec1/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
