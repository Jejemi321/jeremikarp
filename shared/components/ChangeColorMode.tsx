import { useTheme } from "../context/ThemeContext";

export default function ChangeColorMode() {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			onClick={toggleTheme}
			className='transition-colors duration-300 outline-none cursor-pointer'
			aria-label='Change Color mode'>
			{theme === "dark" ? (
				<i className='text-xl fi fi-rr-moon'></i>
			) : (
				<i className='text-xl fi fi-rr-brightness'></i>
			)}
		</button>
	);
}
