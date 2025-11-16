import { PhotoPortfolioItemsType } from "../PhotoPortfolioItems";

export const Elevator: PhotoPortfolioItemsType = {
	title: "ElevatorTitle",
	description: "ElevatorDescription",
	imageCover: "/assets/img/portfolio/photo/Elevator/05.webp",
	date: "2023-04-02",
	favorite: false,
	category: "CategoryPhotography",
	imgArray: Array.from({ length: 10 }, (_, i) => ({
		id: i + 1,
		title: `Elevator - ${String(i + 1).padStart(2, "0")}`,
		src: `/assets/img/portfolio/photo/Elevator/${String(i + 1).padStart(
			2,
			"0"
		)}.webp`,
	})),
};
