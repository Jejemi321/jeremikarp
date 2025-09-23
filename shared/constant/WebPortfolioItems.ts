//TODO: Status - Archive, In Progress, Finish
import { PortfolioItem } from "./PortfolioItems";
type statusType = "Archive" | "In Progress" | "Finish";
type roleType =
	| "Frontend Developer"
	| "FullStack Developer"
	| "Backend Developer"
	| "Designer";
export interface WebPortfolioItemType extends Omit<PortfolioItem, "id"> {
	techStack?: number[];
	imgArray?: string[];
	starterDate?: string;
	url?: string;
	status?: statusType;
	role?: roleType;
	performanceScore?: number;
	accessibilityScore?: number;
	bestPracticeScore?: number;
	seoScore?: number;
	teamSize?: number;
	duration: string;
	supportedLanguages?: string[];
	darkMode?: boolean;
	client?: string;
	colorTheme?: string;
	fontFamily?: string;
	apiUsed?: string[];
}
const WebPortfolioItems: WebPortfolioItemType[] = [
	{
		title: "jeremikarpTitle",
		description: "jeremikarpdescription",
		imageCover: "/assets/img/portfolio/blank.jpg",
		date: "2025-10-01",
		starterDate: "2025-09-01",
		url: "https://jeremikarp.com",
		favorite: false,
		category: "CategoryWebsite",
		status: "Finish",
		client: "Jeremi Karp",
		role: "FullStack Developer",
		duration: "month",
		darkMode: true,
		supportedLanguages: ["EN", "PL"],
		techStack: [1, 5, 7, 8, 9, 15, 18, 19, 20],
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
