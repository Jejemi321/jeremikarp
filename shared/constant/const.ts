export interface navItems {
	id: string | number;
	href: string;
	label: string;
}
export const navItems: navItems[] = [
	{ id: 1, href: "/", label: "Home" },
	{ id: 2, href: "/about", label: "About" },
	{ id: 3, href: "/portfolio", label: "Portfolio" },
	{ id: 4, href: "/resume", label: "Resume" },
	{ id: 5, href: "/contact", label: "Contact" },
];
export interface socialMedia {
	id: number;
	name: string;
	link: string;
	icon: string;
}
export const socialMedia: socialMedia[] = [
	{
		id: 1,
		name: "GitHub",
		link: "https://github.com/Jejemi321",
		icon: "fi fi-brands-github",
	},
	{
		id: 2,
		name: "Linkedin",
		link: "https://www.linkedin.com/in/jeremikarp/",
		icon: "fi fi-brands-linkedin",
	},
	{
		id: 3,
		name: "Facebook",
		link: "https://www.facebook.com/otofoto333",
		icon: "fi fi-brands-facebook",
	},
	{
		id: 4,
		name: "Instagram",
		link: "https://www.instagram.com/jeremikarp/",
		icon: "fi fi-brands-instagram",
	},
];
export const blankJpg: string = "/assets/img/portfolio/blank.jpg";
export interface PortfolioCategory {
	id: number;
	name: string;
}
export const PortfolioCategories: PortfolioCategory[] = [
	{ id: 1, name: "CategoryAll" },
	{ id: 2, name: "CategoryWebsite" },
	{ id: 3, name: "CategoryPhotography" },
];
export type CategoryType = (typeof PortfolioCategories)[number]["name"];
export interface PortfolioSortItems {
	id: number;
	name: string;
}
export const PortfolioSortItems: PortfolioSortItems[] = [
	{ id: 1, name: "Newest" },
	{ id: 2, name: "Oldest" },
	{ id: 3, name: "Favorites" },
	{ id: 4, name: "ZtoA" },
	{ id: 5, name: "AtoZ" },
];
export type PortfolioSortType = (typeof PortfolioSortItems)[number]["name"];
export interface contactInfo {
	id: number;
	iconClass: string;
	name: string;
	value: string;
	typeHref: string;
}
export const contactInfo: contactInfo[] = [
	{
		id: 1,
		iconClass: "fi fi-rr-envelope",
		name: "Email",
		value: "jeremikarp@gmail.com",
		typeHref: "mailto:",
	},
	{
		id: 2,
		iconClass: "fi fi-rr-phone-call",
		name: "Phone",
		value: "+48 518 299 555",
		typeHref: "tel:",
	},
];
type LanguageLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "Native";
type LanguageType = {
	id: number;
	name: string;
	short: string;
	level: LanguageLevel;
};
export const Language: LanguageType[] = [
	{ id: 1, name: "Polish", short: "PL", level: "Native" },
	{ id: 2, name: "English", short: "GB", level: "B2" },
];
type HobbyType = {
	id: number;
	name: string;
	iconClass: string;
	years: Date;
};
export const Hobby: HobbyType[] = [
	{
		id: 1,
		name: "Movies",
		iconClass: "fi fi-rr-film",
		years: new Date(2016, 0, 1),
	},
	{
		id: 2,
		name: "Filmowanie",
		iconClass: "fi fi-rr-camera-movie",
		years: new Date(2022, 0, 1),
	},
	{
		id: 3,
		name: "Cooking",
		iconClass: "fi fi-rr-hat-chef",
		years: new Date(2020, 0, 1),
	},
	{
		id: 4,
		name: "Chess",
		iconClass: "fi fi-rr-chess-piece",
		years: new Date(2015, 0, 1),
	},
	{
		id: 5,
		name: "Music",
		iconClass: "fi fi-rr-waveform-path",
		years: new Date(2016, 0, 1),
	},
	{
		id: 6,
		name: "Traveling",
		iconClass: "fi fi-rr-plane-alt",
		years: new Date(2013, 0, 1),
	},
	{
		id: 7,
		name: "Drone",
		iconClass: "fi fi-rr-drone",
		years: new Date(2023, 0, 1),
	},
	{
		id: 8,
		name: "Sailing",
		iconClass: "fi fi-rr-sailboat",
		years: new Date(2021, 0, 1),
	},
	{
		id: 9,
		name: "Coding",
		iconClass: "fi fi-rr-code-simple",
		years: new Date(2022, 0, 1),
	},
	{
		id: 10,
		name: "Photography",
		iconClass: "fi fi-rr-camera",
		years: new Date(2022, 0, 1),
	},
];
type Training = {
	id: number;
	name: string;
	publisher: string;
	month: string;
	year: string;
	iconClass?: string;
	iconId?: number;
	link?: string;
};
export const TrainingArray: Training[] = [
	{
		id: 1,
		name: "Yacht Helmsman",
		publisher: "Polish Yachting Association",
		month: "July",
		year: "2021",
		iconClass: "fi fi-rr-sailboat",
	},
	{
		id: 2,
		name: "INF-03 Course",
		publisher: "Competence Development Center of Łódź Voivodeship",
		month: "May",
		year: "2023",
	},
	{
		id: 3,
		name: "NSTS - 06 (Drone License)",
		publisher: "Civil Aviation Authority (Poland)",
		month: "November",
		year: "2023",
	},
	{
		id: 4,
		name: "EFFECT - Speed Reading and Effective Learning Course",
		publisher: "EFFECT",
		month: "January",
		year: "2024",
	},
	{
		id: 5,
		name: "Driving License Category B",
		publisher: "Mayor of Łódź",
		month: "May",
		year: "2024",
	},
	{
		id: 6,
		name: "High School Final Exams (Matura)",
		publisher: "OKE in Warsaw",
		month: "May",
		year: "2025",
	},
];
type Schools = {
	id: number;
	name: string;
	level: string;
	from: string;
	to: string;
	web: string;
};
export const SchoolsArray: Schools[] = [
	{
		id: 1,
		name: "Primary School No. 71",
		level: "Primary Education",
		from: "2013",
		to: "2017",
		web: "https://sp71.lodz.pl/",
	},
	{
		id: 2,
		name: "Catholic School Complex named after John Paul II",
		level: "Primary Education",
		from: "2017",
		to: "2021",
		web: "https://katolik.edu.pl/",
	},
	{
		id: 3,
		name: "Benedict Schools in Sulejówek – Homeschooling (Primary & High School)",
		level: "Secondary Education",
		from: "2021",
		to: "2025",
		web: "https://szkolybenedykta.pl/",
	},
	{
		id: 4,
		name: "Higher School of Vocational Education",
		level: "University",
		from: "2025",
		to: "Now",
		web: "https://studia-online.pl/",
	},
];
type roleInWork = "Ui/Ux Designer" | "Developer";
type peopleWork = {
	id: number;
	name: string;
	role: roleInWork;
	img: string;
	web: string;
};
export const WorkPeopleArray: peopleWork[] = [
	{
		id: 1,
		name: "Norbert Stańczyk",
		role: "Ui/Ux Designer",
		img: blankJpg,
		web: "https://norbertkalifornia.pl/",
	},
];
type FaqType = {
	id: number;
	question: string;
	answer: string;
};
export const FaqArray: FaqType[] = [
	{
		id: 1,
		question: "Jakie technologie najczęściej wykorzystujesz?",
		answer:
			"Najczęściej pracuję z React, Vite, Tailwind CSS i Supabase. Dzięki temu mogę budować szybkie i skalowalne aplikacje.",
	},

	{
		id: 2,
		question: "Ile czasu zajmuje realizacja projektu?",
		answer:
			"Proste strony mogą powstać w kilka dni, a bardziej złożone aplikacje w kilka tygodni — wszystko zależy od zakresu prac.",
	},
	{
		id: 3,
		question: "Jak wygląda proces współpracy?",
		answer:
			"Najpierw omawiam potrzeby, potem przygotowuję plan i projekt, następnie zajmuję się kodowaniem i wdrożeniem. Na końcu oferuję testy i wsparcie.",
	},

	{
		id: 4,
		question: "Czy zajmujesz się optymalizacją SEO i wydajności?",
		answer:
			"Tak, dbam o to, by strony były szybkie, dobrze oceniane w Lighthouse i przygotowane pod SEO.",
	},
	{
		id: 5,
		question: "Czy pomagasz w hostingu i wdrożeniu projektu?",
		answer:
			"Oczywiście — mogę doradzić przy wyborze hostingu, skonfigurować serwer i wdrożyć stronę na produkcję.",
	},
];
