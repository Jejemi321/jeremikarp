//! Note app || ToDo 2.0 || currency || roulette || voting || ciekawostka
import { PortfolioItem } from "../types";
import { currency, jeremikarp, ovStudio, taxConsulting, toDoApp } from "./Web/";
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
export interface WebPortfolioItemType
	extends Omit<PortfolioItem, "id" | "category"> {
	techStack: number[];
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
	jeremikarp,
	currency,
	toDoApp,
	taxConsulting,
	ovStudio,
];
export default WebPortfolioItems;
