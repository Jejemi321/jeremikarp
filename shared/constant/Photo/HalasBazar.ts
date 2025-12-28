import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const HalasBazar: PhotoPortfolioItemsType = {
	title: "HalasBazarTitle",
	description: "HalasBazarDescription",
	imageCover: "/assets/img/portfolio/photo/HalasBazar/18.webp",
	date: "2025-12-20",
	favorite: false,
	imgArray: Array.from({ length: 23 }, (_, i) => ({
		id: i + 1,
		title: `HAŁAS (Bazar) - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/HalasBazar/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
