import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const Hotel: PhotoPortfolioItemsType = {
	title: "HotelTitle",
	description: "HotelDescription",
	imageCover: "/assets/img/portfolio/photo/Hotel/16.webp",
	date: "2023-11-09",
	favorite: false,
	category: "CategoryPhotography",
	imgArray: Array.from({ length: 27 }, (_, i) => ({
		id: i + 1,
		title: `Hotel - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/Hotel/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
