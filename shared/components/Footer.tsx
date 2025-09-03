"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { navItems, socialMedia } from "../constant/const";

// Typy dla linków i social media

export default function Footer() {
	const t = useTranslations("nav");

	return (
		<>
			<footer className='flex flex-col items-center justify-around px-2 py-1 gap-2 md:gap-0 md:flex-row'>
				{/* Social media */}
				<div className='flex justify-center w-full md:w-1/3 lg:w-1/4'>
					<div className='flex w-1/3 justify-evenly'>
						{socialMedia.map(el => (
							<Link
								target='_blank'
								href={el.link}
								key={el.name}
								className='transition-opacity duration-75 cursor-pointer hover:opacity-60'>
								<i className={`w-4 h-4 ${el.icon} mx-1`} />
							</Link>
						))}
					</div>
				</div>

				{/* Title */}
				<div className='w-1/3  text-base sm:text-xl md:text-2xl text-center max-md:w-3/4'>
					Jeremi Karp
				</div>

				{/* Navigation links */}
				<div className='flex justify-center w-1/3 max-md:w-3/4'>
					<p className='opacity-75 text-xs sm:text-sm'>
						&copy; {new Date().getFullYear()} Jeremi Karp. {t("RightsReserved")}
					</p>
				</div>
			</footer>
		</>
	);
}
