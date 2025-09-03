export interface navItems {
	id: string | number;
	href: string;
	label: string;
}

export const navItems: navItems[] = [
	{ id: 1, href: "/", label: "Home" },
	{ id: 2, href: "/about", label: "About" },
	{ id: 3, href: "/portfolio", label: "Portfolio" },
	{ id: 4, href: "/services", label: "Services" },
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
		link: "https://www.facebook.com/otofoto333/?locale=pl_PL",
		icon: "fi fi-brands-facebook",
	},
	{
		id: 4,
		name: "Instagram",
		link: "https://www.instagram.com/jeremikarp/",
		icon: "fi fi-brands-instagram",
	},
];

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

export interface PortfolioItem {
	id: number;
	title: string;
	description: string;
	image: string;
	date: string;
	favorite: boolean;
	category: CategoryType;
	techStack?: number[];
}
export const PortfolioItems: PortfolioItem[] = [
	{
		id: 1,
		title: "Project One",
		description: "Description of project one.",
		image: "/img/portfolio/blank.jpg",
		date: "2023-01-01",
		favorite: false,
		category: "CategoryWebsite",
	},
	{
		id: 2,
		title: "Project Two",
		description: "Description of project two.",
		image: "/img/portfolio/blank.jpg",
		date: "2023-02-01",
		favorite: true,
		category: "CategoryPhotography",
	},
	{
		id: 3,
		title: "Project Three",
		description: "Description of project three.",
		image: "/img/portfolio/blank.jpg",
		date: "2023-03-01",
		favorite: false,
		category: "CategoryWebsite",
	},
	{
		id: 4,
		title: "Project Four",
		description: "Description of project four.",
		image: "/img/portfolio/blank.jpg",
		date: "2023-04-01",
		favorite: true,
		category: "CategoryPhotography",
	},
	{
		id: 5,
		title: "Project Five",
		description: "Description of project five.",
		image: "/img/portfolio/blank.jpg",
		date: "2023-05-01",
		favorite: false,
		category: "CategoryPhotography",
	},
	{
		id: 6,
		title: "Project Six",
		description: "Description of project six.",
		image: "/img/portfolio/blank.jpg",
		date: "2023-06-01",
		favorite: true,
		category: "CategoryWebsite",
	},
	{
		id: 7,
		title: "Project Seven",
		description: "Description of project seven.",
		image: "/img/portfolio/blank.jpg",
		date: "2023-07-01",
		favorite: false,
		category: "CategoryPhotography",
	},
	{
		id: 8,
		title: "Project Eight",
		description: "Description of project eight.",
		image: "/img/portfolio/blank.jpg",
		date: "2023-08-01",
		favorite: true,
		category: "CategoryWebsite",
	},
	{
		id: 9,
		title: "Nature Gallery",
		description: "A collection of stunning nature photographs.",
		image: "/img/portfolio/nature.jpg",
		date: "2023-09-10",
		favorite: false,
		category: "CategoryPhotography",
	},
	{
		id: 10,
		title: "E-Commerce Platform",
		description: "A modern e-commerce website for online shopping.",
		image: "/img/portfolio/ecommerce.jpg",
		date: "2023-10-15",
		favorite: true,
		category: "CategoryWebsite",
	},
	{
		id: 11,
		title: "Urban Exploration",
		description: "Photography series exploring urban landscapes.",
		image: "/img/portfolio/urban.jpg",
		date: "2023-11-05",
		favorite: false,
		category: "CategoryPhotography",
	},
	{
		id: 12,
		title: "Portfolio Redesign",
		description: "A fresh redesign of my personal portfolio website.",
		image: "/img/portfolio/portfolio-redesign.jpg",
		date: "2023-12-01",
		favorite: true,
		category: "CategoryWebsite",
	},
	{
		id: 13,
		title: "Wildlife Wonders",
		description: "Capturing the beauty of wildlife in their natural habitat.",
		image: "/img/portfolio/wildlife.jpg",
		date: "2024-01-20",
		favorite: false,
		category: "CategoryPhotography",
	},
	{
		id: 14,
		title: "Startup Landing Page",
		description: "Landing page design for a tech startup.",
		image: "/img/portfolio/startup.jpg",
		date: "2024-02-10",
		favorite: true,
		category: "CategoryWebsite",
	},
	{
		id: 15,
		title: "Event Photography",
		description: "Memorable moments captured at various events.",
		image: "/img/portfolio/event.jpg",
		date: "2024-03-05",
		favorite: false,
		category: "CategoryPhotography",
	},
	{
		id: 16,
		title: "Blog Platform",
		description: "A feature-rich blogging platform for writers.",
		image: "/img/portfolio/blog.jpg",
		date: "2024-04-01",
		favorite: true,
		category: "CategoryWebsite",
		techStack: [1, 2, 3],
	},
];
export type PortfolioItemType = (typeof PortfolioItems)[number];

interface TechStack {
	id: number;
	name: string;
	iconClass: string;
}
export const TechStackArray: TechStack[] = [
	{ id: 1, name: "Tailwind", iconClass: "Tailwind Class" },
];

export type TechStackType = (typeof TechStackArray)[number];
