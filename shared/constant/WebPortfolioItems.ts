//TODO: Status - Archive, In Progress, Finish
import { PortfolioItem } from "./PortfolioItems";

export interface WebPortfolioItemType extends Omit<PortfolioItem, "id"> {
	techStack: number[];
	imgArray: string[];
}
const WebPortfolioItems: WebPortfolioItemType[] = [
	{
		title: "Project One",
		description: "Description of project one.",
		imageCover: "/assets/img/portfolio/blank.jpg",
		date: "2023-01-01",
		favorite: false,
		category: "CategoryWebsite",
		techStack: [1, 2],
		imgArray: [
			"/assets/img/portfolio/blank.jpg",
			"/assets/img/portfolio/blank.jpg",
			"/assets/img/portfolio/blank.jpg",
			"/assets/img/portfolio/blank.jpg",
			"/assets/img/portfolio/blank.jpg",
		],
	},
];
export default WebPortfolioItems;
