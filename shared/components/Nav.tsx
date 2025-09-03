"use client";

import Link from "next/link";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import ChangeLanguage from "./ChangeLanguage";
import ChangeColorMode from "./ChangeColorMode";
import { useTranslations } from "next-intl";
import { navItems } from "../constant/const";

const Nav: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const t = useTranslations("nav");

	return (
		<nav className='sticky top-0 z-50 flex items-center justify-between transition-all duration-300 ease-in-out max-md:flex-col max-md:items-start '>
			{/* Logo */}
			<Link href='/' className='m-4 text-3xl font-bold'>
				Jeremi Karp
			</Link>

			{/* Hamburger */}
			<div className='absolute flex-col justify-between hidden w-8 h-8 max-md:flex top-3 right-5'>
				<Hamburger toggled={isOpen} toggle={setIsOpen} />
			</div>

			{/* Nav Items */}
			<ul
				className={`flex items-center  ${
					isOpen ? "flex-col" : "max-md:hidden"
				} max-md:w-full max-md:mb-1`}>
				{navItems.map(item => {
					return (
						<li
							key={item.href}
							className='text-sm md:text-lg lg:text-xl max-md:w-full max-md:text-center max-md:text-xl'
							{...(isOpen && { onClick: () => setIsOpen(false) })}>
							<Link
								href={item.href}
								className={`p-2 mx-1 my-2 rounded-lg opacity-100 hover:opacity-75`}>
								{t(item.label)}
							</Link>
						</li>
					);
				})}

				{/* Language Selector */}
				<li className='p-2 mx-1/4 md:my-2 max-md:w-full max-md:text-center'>
					<ChangeLanguage />
				</li>

				{/* Dark/Light Button */}
				<li className='p-2 mx-1 md:my-2 max-md:w-full max-md:text-center'>
					<ChangeColorMode />
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
