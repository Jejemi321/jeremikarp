import { PortfolioItem } from "./PortfolioItems";

export interface PhotoPortfolioItemsType extends Omit<PortfolioItem, "id"> {
	techStack?: number[];
}
const PhotoPortfolioItems: PhotoPortfolioItemsType[] = [
	{
		title: "Project One",
		description: "Description of project one.",
		imageCover: "/assets/img/portfolio/blank.jpg",
		date: "2023-01-01",
		favorite: false,
		category: "CategoryPhotography",
		techStack: [1, 2],
	},
	{
		title: "Project Three",
		description: "Description of project three.",
		imageCover: "/assets/img/portfolio/blank.jpg",
		date: "2023-03-01",
		favorite: false,
		category: "CategoryPhotography",
		techStack: [1, 3],
	},
];
export default PhotoPortfolioItems;
