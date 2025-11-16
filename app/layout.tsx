import type { Metadata } from "next";
import { Kode_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/shared/context/ThemeContext";

const geistMono = Kode_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
	weight: ["400", "700"],
});

export const metadata: Metadata = {
	title: "Jeremi Karp",
	description: "Jeremi Karp - Portfolio",
	creator: "Jeremi Karp",
	authors: [{ name: "Jeremi Karp", url: "https://www.jeremikarp.com/en" }],
	keywords: [
		// English keywords
		"Jeremi Karp",
		"web developer portfolio",
		"frontend developer",
		"React developer",
		"JavaScript developer",
		"TypeScript",
		"Vite projects",
		"Tailwind CSS",
		"Supabase integration",
		"responsive web design",
		"modern web applications",
		"UI/UX design",
		"web programming",
		"React projects",
		"portfolio website",
		"interactive websites",
		"single page applications",
		"Next.js portfolio",
		"creative web solutions",
		"software engineer projects",

		// Polish keywords
		"Jeremi Karp",
		"portfolio web developera",
		"frontend developer",
		"programista JavaScript",
		"programista React",
		"projekty webowe",
		"projekty responsywne",
		"Tworzenie stron internetowych",
		"projekty web aplikacji",
		"UI/UX design",
		"nowoczesne strony internetowe",
		"projekty interaktywne",
		"Single Page Applications",
		"portfolio Next.js",
		"projekty oprogramowania",
		"strony internetowe",
		"strony internetowe warszawa",
		"strony internetowe łódź",
		"Warszawa",
		"Łódź",
	],
	metadataBase: new URL("https://www.jeremikarp.com"),
	alternates: {
		canonical: "https://www.jeremikarp.com",
		languages: {
			en: "https://www.jeremikarp.com/en",
			pl: "https://www.jeremikarp.com/pl",
		},
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body
				className={`${geistMono.className} antialiased text-foreground bg-background dark:bg-dark-background dark:text-dark-foreground transition-colors duration-300`}>
				<ThemeProvider>{children}</ThemeProvider>
				<Analytics />
			</body>
		</html>
	);
}
