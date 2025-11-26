import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const EgzodiaBlurry: PhotoPortfolioItemsType = {
	title: "EgzodiaBlurryTitle",
	description: "EgzodiaBlurryDescription",
	imageCover: "/assets/img/portfolio/photo/EgzodiaBlurry/10.webp",
	date: "2025-10-27",
	favorite: false,
	imgArray: Array.from({ length: 20 }, (_, i) => ({
		id: i + 1,
		title: `Egzodia & Blurry - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/EgzodiaBlurry/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
