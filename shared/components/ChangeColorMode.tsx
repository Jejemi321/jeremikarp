"use client";
import { useEffect, useState } from "react";

export default function ChangeColorMode() {
	const [theme, setTheme] = useState<string>();

	// On mount: load saved theme or fallback to system preference
	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			setTheme(savedTheme);
			document.documentElement.classList.toggle("dark", savedTheme === "dark");
		} else {
			const prefersDark = window.matchMedia(
				"(prefers-color-scheme: dark)"
			).matches;
			const systemTheme = prefersDark ? "dark" : "light";
			setTheme(systemTheme);
			document.documentElement.classList.toggle("dark", prefersDark);
		}
	}, []);

	// Toggle handler
	const toggleTheme = () => {
		const newTheme = theme === "dark" ? "light" : "dark";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
		document.documentElement.classList.toggle("dark", newTheme === "dark");
	};

	return (
		<button
			onClick={toggleTheme}
			className='cursor-pointer outline-none transition-colors duration-300'>
			{theme === "dark" ? (
				<i className='fi fi-rr-moon text-xl'></i>
			) : (
				<i className='fi fi-rr-brightness text-xl'></i>
			)}
		</button>
	);
}
