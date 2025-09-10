// TODO html css ts react nextjs tailwind  supabase framer-motion firebase vercel Cloudflare github git

type TechStack =
	| {
			id: number;
			name: string;
			iconClass: string;
			iconImg?: never;
			darkIconImg?: never;
	  }
	| {
			id: number;
			name: string;
			iconImg: string;
			darkIconImg?: string;
			iconClass?: never;
	  };

export const TechStackArray: TechStack[] = [
	{ id: 1, name: "Js", iconClass: "fi fi-brands-js" },

	{
		id: 2,
		name: "Tailwind Css",
		iconImg: "/assets/icons/light/TailwindCssLight.png",
		darkIconImg: "/assets/icons/dark/TailwindCssDark.png",
	},
	{
		id: 3,
		name: "Tailwind Css",
		iconImg: "/assets/icons/light/TailwindCssLight.png",
		darkIconImg: "/assets/icons/dark/TailwindCssDark.png",
	},
];

export type TechStackType = (typeof TechStackArray)[number];
