type KnowledgeLevel =
	| "Beginner"
	| "Intermediate"
	| "Advanced"
	| "Expert"
	| "Master";
type TechCategory =
	| "Frontend"
	| "Backend"
	| "Database"
	| "Deployment"
	| "Tools";
type KnowledgeWidth = "w-1/5" | "w-2/5" | "w-3/5" | "w-4/5" | "w-full";
type TechStackBase = {
	id: number;
	name: string;
	description: string;
	knowledge: KnowledgeLevel;
	KnowledgeWidth: KnowledgeWidth;
	type: "Framework" | "Language" | "Others";
	category: TechCategory;
	docsUrl?: string;
	since: Date; // year of first use
	star?: boolean;
};
type TechStackWithClass = TechStackBase & {
	iconClass: string;
	iconImg?: never;
	darkIconImg?: never;
};
type TechStackWithImage = TechStackBase & {
	iconClass?: never;
	iconImg: string;
	darkIconImg?: string;
};
type TechStack = TechStackWithClass | TechStackWithImage;
export const TechStackArray: TechStack[] = [
	{
		id: 1,
		name: "HTML",
		description: "Markup language for structuring web pages.",
		knowledge: "Advanced",
		KnowledgeWidth: "w-3/5",
		type: "Language",
		category: "Frontend",
		since: new Date(2020, 0, 1),
		iconClass: "fi fi-brands-html5",
		docsUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML",
		star: true,
	},
	{
		id: 2,
		name: "CSS",
		description: "Stylesheet language for designing web pages.",
		knowledge: "Advanced",
		KnowledgeWidth: "w-3/5",
		type: "Language",
		category: "Frontend",
		since: new Date(2022, 0, 1),
		iconClass: "fi fi-brands-css3",
		docsUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS",
		star: true,
	},
	{
		id: 3,
		name: "Scss/Sass",
		description: "CSS preprocessor for nested and maintainable styles.",
		knowledge: "Advanced",
		KnowledgeWidth: "w-3/5",
		type: "Language",
		category: "Frontend",
		since: new Date(2022, 0, 1),
		iconClass: "fi fi-brands-sass",
		docsUrl: "https://sass-lang.com/documentation",
	},
	{
		id: 4,
		name: "JavaScript",
		description: "High-level programming language for web development.",
		knowledge: "Advanced",
		KnowledgeWidth: "w-3/5",
		type: "Language",
		category: "Frontend",
		since: new Date(2020, 0, 1),
		iconClass: "fi fi-brands-js",
		docsUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
		star: true,
	},
	{
		id: 5,
		name: "TypeScript",
		description: "Superset of JavaScript adding static typing.",
		knowledge: "Intermediate",
		KnowledgeWidth: "w-2/5",
		type: "Language",
		category: "Frontend",
		since: new Date(2023, 0, 1),
		iconClass: "fi fi-brands-typescript",
		docsUrl: "https://www.typescriptlang.org/docs/",
		star: true,
	},
	{
		id: 6,
		name: "React",
		description: "Library for building user interfaces.",
		knowledge: "Advanced",
		KnowledgeWidth: "w-3/5",
		type: "Framework",
		category: "Frontend",
		since: new Date(2022, 0, 1),
		iconImg: "/assets/icons/light/react-light.png",
		darkIconImg: "/assets/icons/dark/react-dark.png",
		docsUrl: "https://react.dev/",
		star: true,
	},
	{
		id: 7,
		name: "Next.js",
		description:
			"React framework for server-side rendering and fullstack apps.",
		knowledge: "Intermediate",
		KnowledgeWidth: "w-2/5",
		type: "Framework",
		category: "Frontend",
		since: new Date(2023, 0, 1),
		iconImg: "/assets/icons/light/nextjs-light.png",
		darkIconImg: "/assets/icons/dark/nextjs-dark.png",
		docsUrl: "https://nextjs.org/docs",
		star: true,
	},
	{
		id: 8,
		name: "Tailwind CSS",
		description: "Utility-first CSS framework for rapid UI development.",
		knowledge: "Advanced",
		KnowledgeWidth: "w-3/5",
		type: "Framework",
		category: "Frontend",
		since: new Date(2022, 0, 1),
		iconImg: "/assets/icons/light/TailwindCssLight.png",
		darkIconImg: "/assets/icons/dark/TailwindCssDark.png",
		docsUrl: "https://tailwindcss.com/docs",
		star: true,
	},
	{
		id: 9,
		name: "Framer Motion",
		description: "Animation library for React applications.",
		knowledge: "Intermediate",
		KnowledgeWidth: "w-2/5",
		type: "Framework",
		category: "Frontend",
		since: new Date(2023, 0, 1),
		iconImg: "/assets/icons/light/framer-light.png",
		darkIconImg: "/assets/icons/dark/framer-dark.png",
		docsUrl: "https://www.framer.com/motion/",
	},
	{
		id: 10,
		name: "PHP",
		description:
			"Backend language used for web development and server-side logic.",
		KnowledgeWidth: "w-2/5",
		knowledge: "Intermediate",
		type: "Language",
		category: "Backend",
		since: new Date(2022, 0, 1),
		iconClass: "fi fi-brands-php",
		docsUrl: "https://www.php.net/docs.php",
		star: true,
	},
	{
		id: 11,
		name: "SQL",
		description: "Structured Query Language for relational databases.",
		KnowledgeWidth: "w-2/5",
		knowledge: "Intermediate",
		type: "Language",
		category: "Database",
		since: new Date(2022, 0, 1),
		iconClass: "fi fi-brands-mysql",
		docsUrl: "https://www.w3schools.com/sql/",
		star: true,
	},
	{
		id: 12,
		name: "Node.js",
		description: "JavaScript runtime for backend development.",
		knowledge: "Intermediate",
		KnowledgeWidth: "w-2/5",
		type: "Framework",
		category: "Backend",
		since: new Date(2022, 0, 1),
		iconClass: "fi fi-brands-node-js",
		docsUrl: "https://nodejs.org/en/docs/",
		star: true,
	},
	{
		id: 13,
		name: "Express.js",
		description: "Web framework for Node.js to build APIs quickly.",
		knowledge: "Intermediate",
		KnowledgeWidth: "w-2/5",
		type: "Framework",
		category: "Backend",
		since: new Date(2022, 0, 1),
		iconImg: "/assets/icons/light/expressjs-light.png",
		darkIconImg: "/assets/icons/dark/expressjs-dark.png",
		docsUrl: "https://expressjs.com/",
		star: true,
	},
	{
		id: 14,
		name: "Supabase",
		description: "Open-source Firebase alternative with Postgres database.",
		knowledge: "Intermediate",
		KnowledgeWidth: "w-2/5",
		type: "Others",
		category: "Backend",
		since: new Date(2023, 0, 1),
		iconImg: "/assets/icons/light/supabase-light.png",
		darkIconImg: "/assets/icons/dark/supabase-dark.png",
		docsUrl: "https://supabase.com/docs",
		star: true,
	},
	{
		id: 15,
		name: "Vercel",
		description: "Deployment and hosting platform for frontend apps.",
		knowledge: "Intermediate",
		KnowledgeWidth: "w-2/5",
		type: "Others",
		category: "Deployment",
		since: new Date(2023, 0, 1),
		iconImg: "/assets/icons/light/vercel-light.png",
		darkIconImg: "/assets/icons/dark/vercel-dark.png",
		docsUrl: "https://vercel.com/docs",
	},
	{
		id: 16,
		name: "Cloudflare",
		description: "CDN and security platform for web apps.",
		knowledge: "Beginner",
		KnowledgeWidth: "w-1/5",
		type: "Others",
		category: "Deployment",
		since: new Date(2024, 0, 1),
		iconImg: "/assets/icons/light/Cloudflare-light.png",
		darkIconImg: "/assets/icons/dark/Cloudflare-dark.png",
		docsUrl: "https://developers.cloudflare.com/",
	},
	{
		id: 17,
		name: "Git",
		description: "Distributed version control system.",
		knowledge: "Intermediate",
		KnowledgeWidth: "w-2/5",
		type: "Others",
		category: "Tools",
		since: new Date(2021, 0, 1),
		iconImg: "/assets/icons/light/Git-light.png",
		darkIconImg: "/assets/icons/dark/Git-dark.png",
		docsUrl: "https://git-scm.com/doc",
	},
	{
		id: 18,
		name: "GitHub",
		description: "Platform for hosting and collaborating on Git repositories.",
		knowledge: "Intermediate",
		KnowledgeWidth: "w-2/5",
		type: "Others",
		category: "Tools",
		since: new Date(2021, 0, 1),
		iconClass: "fi fi-brands-github",
		docsUrl: "https://docs.github.com/",
	},
	{
		id: 19,
		name: "ESLint",
		description: "Tool for identifying and reporting on code issues.",
		knowledge: "Intermediate",
		KnowledgeWidth: "w-2/5",
		type: "Others",
		category: "Tools",
		since: new Date(2022, 0, 1),
		iconImg: "/assets/icons/light/Eslint-light.png",
		darkIconImg: "/assets/icons/dark/Eslint-dark.png",
		docsUrl: "https://eslint.org/docs/",
	},
	{
		id: 20,
		name: "Prettier",
		description: "Code formatter for consistent code style.",
		knowledge: "Intermediate",
		KnowledgeWidth: "w-2/5",
		type: "Others",
		category: "Tools",
		since: new Date(2022, 0, 1),
		iconImg: "/assets/icons/light/prettier-light.png",
		darkIconImg: "/assets/icons/dark/prettier-dark.png",
		docsUrl: "https://prettier.io/docs/en/",
	},
];
//TODO swiper/react-icons/hamburger-react/sooner/emailjs/i18n/tailwind scrollbar
// Postman,Cypress,Jest,GraphQL
