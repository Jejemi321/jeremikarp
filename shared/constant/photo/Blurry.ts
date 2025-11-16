import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const Blurry: PhotoPortfolioItemsType = {
	title: "BlurryTitle",
	description: "BlurryDescription",
	imageCover: "/assets/img/portfolio/photo/Blurry/08.webp",
	date: "2024-11-03",
	favorite: false,
	category: "CategoryPhotography",
	imgArray: Array.from({ length: 10 }, (_, i) => ({
		id: i + 1,
		title: `Blurry universe - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/Blurry/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
