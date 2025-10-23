//TODO Note app/ ToDo/ currency/ roulette/ voting/ciekawostka
import { PortfolioItem } from "./PortfolioItems";
type statusType = "Archive" | "InProgress" | "Finish";
type roleType =
	| "Frontend Developer"
	| "FullStack Developer"
	| "Backend Developer"
	| "Designer";
type duration =
	| "Day"
	| "Week"
	| "2Weeks"
	| "3Weeks"
	| "Month"
	| "2Months"
	| "3Months"
	| "6Months";
export interface WebPortfolioItemType extends Omit<PortfolioItem, "id"> {
	techStack?: number[];
	starterDate?: string;
	url?: string;
	status: statusType;
	role?: roleType;
	performanceScore?: number;
	accessibilityScore?: number;
	bestPracticeScore?: number;
	seoScore?: number;
	teamSize?: number;
	duration: duration;
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
		imageCover: "/assets/img/portfolio/web/jeremikarpLogo.webp",
		date: "2025-10-01",
		starterDate: "2025-09-01",
		url: "https://jeremikarp.com",
		favorite: true,
		category: "CategoryWebsite",
		status: "Finish",
		client: "Jeremi Karp",
		role: "FullStack Developer",
		duration: "Month",
		darkMode: true,
		supportedLanguages: ["EN", "PL"],
		techStack: [1, 5, 7, 8, 9, 15, 18, 19, 20, 22, 23, 24, 25, 26, 27],
	},
	{
		title: "currencyTitle",
		description: "currencyDescription",
		imageCover: "/assets/img/portfolio/web/currency.webp",
		date: "2025-09-29",
		starterDate: "2025-09-28",
		url: "https://currency-zeta-ashy.vercel.app",
		favorite: false,
		category: "CategoryWebsite",
		status: "Finish",
		client: "Jeremi Karp",
		role: "FullStack Developer",
		duration: "Day",
		darkMode: false,
		supportedLanguages: ["EN"],
		techStack: [5, 6, 7, 8, 9, 19, 22],
	},
	{
		title: "toDoAppTitle",
		description: "toDoAppDescription",
		imageCover: "/assets/img/portfolio/web/toDoApp.webp",
		date: "2025-09-23",
		starterDate: "2025-10-24",
		url: "https://to-do-app-next-js-two.vercel.app",
		favorite: false,
		category: "CategoryWebsite",
		status: "Finish",
		client: "Jeremi Karp",
		role: "FullStack Developer",
		duration: "Day",
		darkMode: true,
		supportedLanguages: ["EN", "PL"],
		techStack: [1, 5, 7, 8, 12, 19, 20, 26],
	},
];
export default WebPortfolioItems;
