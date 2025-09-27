"use client";

import Link from "next/link";
import { Sling as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";
import ChangeLanguage from "./ChangeLanguage";
import ChangeColorMode from "./ChangeColorMode";
import { useTranslations } from "next-intl";
import { navItems } from "../constant/const";
import { motion, AnimatePresence, Variants, easeInOut } from "framer-motion";

// Navbar fade-in
const navVariants: Variants = {
	initial: { y: -30, opacity: 0 },
	animate: {
		y: 0,
		opacity: 1,
		transition: { duration: 0.4, ease: easeInOut },
	},
};

// Desktop items
const itemVariants: Variants = {
	hidden: { opacity: 0, y: -10 },
	show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

// Mobile dropdown animation
const dropdownVariants: Variants = {
	hidden: { height: 0, opacity: 0 },
	show: {
		height: "auto",
		opacity: 1,
		transition: {
			duration: 0.4,
			ease: easeInOut,
			staggerChildren: 0.1,
		},
	},
	exit: {
		height: 0,
		opacity: 0,
		transition: { duration: 0.3, ease: easeInOut },
	},
};

function useIsMobile() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const check = () => setIsMobile(window.innerWidth < 768);
		check();
		window.addEventListener("resize", check);
		return () => window.removeEventListener("resize", check);
	}, []);

	return isMobile;
}

const Nav: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [mounted, setMounted] = useState(false);
	const isMobile = useIsMobile();
	const t = useTranslations("nav");

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<motion.nav
			variants={navVariants}
			initial='initial'
			animate='animate'
			className='sticky top-0 z-50 flex items-center justify-between transitionAll backgroundDefault max-md:flex-col max-md:items-start'>
			{/* Logo */}
			<Link href='/' className='m-4 text-3xl font-bold'>
				Jeremi Karp
			</Link>

			{/* Hamburger */}
			<div className='absolute flex-col justify-between hidden w-8 h-8 max-md:flex top-3 right-5'>
				<Hamburger toggled={isOpen} toggle={setIsOpen} />
			</div>

			{/* Nav Items */}
			<AnimatePresence>
				{(isMobile ? isOpen : true) && (
					<motion.ul
						key='navList'
						variants={isMobile ? dropdownVariants : undefined}
						initial='hidden'
						animate='show'
						exit='exit'
						className={`flex items-center ${
							isMobile ? "flex-col" : ""
						} max-md:w-full max-md:mb-1`}>
						{navItems.map(item => (
							<motion.li
								key={item.href}
								variants={itemVariants}
								className='text-sm md:text-lg lg:text-xl max-md:w-full max-md:text-center max-md:text-xl'
								{...(isMobile &&
									isOpen && { onClick: () => setIsOpen(false) })}>
								<Link
									href={item.href}
									className='p-2 mx-1 my-2 rounded-lg opacity-100 hover:opacity-75'>
									{t(item.label)}
								</Link>
							</motion.li>
						))}

						{/* Language Selector */}
						<motion.li
							variants={itemVariants}
							className='p-2 mx-1/4 md:my-2 max-md:w-full max-md:text-center'>
							<ChangeLanguage />
						</motion.li>

						{/* Dark/Light Button */}
						<motion.li
							variants={itemVariants}
							className='p-2 mx-1 md:my-2 max-md:w-full max-md:text-center'>
							<ChangeColorMode />
						</motion.li>
					</motion.ul>
				)}
			</AnimatePresence>
		</motion.nav>
	);
};

export default Nav;
