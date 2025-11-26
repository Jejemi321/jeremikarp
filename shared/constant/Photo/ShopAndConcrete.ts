import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const ShopConcrete: PhotoPortfolioItemsType = {
	title: "Shop&ConcreteTitle",
	description: "Shop&ConcreteDescription",
	imageCover: "/assets/img/portfolio/photo/Shop&Concrete/01.webp",
	date: "2023-05-29",
	favorite: false,
	imgArray: Array.from({ length: 9 }, (_, i) => ({
		id: i + 1,
		title: `Shop & Concrete - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/Shop&Concrete/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
