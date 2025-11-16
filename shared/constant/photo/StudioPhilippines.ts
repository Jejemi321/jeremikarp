import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const StudioPhilippines: PhotoPortfolioItemsType = {
	title: "StudioPhilippinesTitle",
	description: "StudioPhilippinesDescription",
	imageCover: "/assets/img/portfolio/photo/StudioPhilippines/26.webp",
	date: "2022-10-29",
	favorite: false,
	category: "CategoryPhotography",
	imgArray: Array.from({ length: 55 }, (_, i) => ({
		id: i + 1,
		title: `StudioPhilippines - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/StudioPhilippines/${String(
			i + 1
		).padStart(2, "0")}.webp`,
	})),
};
