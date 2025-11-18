import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const PhilippineArchitecture: PhotoPortfolioItemsType = {
	title: "PhilippineArchitectureTitle",
	description: "PhilippineArchitectureDescription",
	imageCover: "/assets/img/portfolio/photo/PhilippineArchitecture/28.webp",
	date: "2022-11-25",
	favorite: false,
	category: "CategoryPhotography",
	imgArray: Array.from({ length: 54 }, (_, i) => ({
		id: i + 1,
		title: `Philippine Architecture - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/PhilippineArchitecture/${String(
			i + 1
		).padStart(2, "0")}.webp`,
	})),
};
