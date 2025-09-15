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
export const someConst = "abcd";
