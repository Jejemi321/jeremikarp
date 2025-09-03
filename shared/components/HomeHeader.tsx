"use client";
import Link from "next/link";
import { socialMedia } from "../constant/const";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

function HomeHeader() {
	const t = useTranslations("home");
	const isInView = true; // Replace with actual in-view logic if needed
	return (
		<>
			<h3 className='text-[3.5rem] uppercase leading-none mt-2.5 3xs:text-[4rem] 4xl:text-[27rem] xs:text-[5.8rem] lg:text-[10.5rem] xl:text-[13.5rem] 2xl:text-[15rem] sm:text-[7rem] md:text-[8.5rem] 2xs:text-7xl 2xs:mb-3 xs:mb-0'>
				{t("headerTop")
					.split("")
					.map((letter, index) => (
						<motion.span
							key={index}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								duration: 0.3,
								delay: index * 0.2,
								repeat: Infinity,
								repeatDelay: 3,
								repeatType: "reverse",
							}}>
							{letter}
						</motion.span>
					))}{" "}
				<br />
				{t("headerDown")
					.split("")
					.map((letter, index) => (
						<motion.span
							key={index}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								duration: 0.3,
								delay: index * 0.1,
								repeat: Infinity,
								repeatDelay: 3,
								repeatType: "reverse",
							}}>
							{letter}
						</motion.span>
					))}
			</h3>
			<p className='text-xs leading-5 3xl:text-2xl 2xs:text-lg 3xs:text-base 4xl:text-5xl md:text-lg md:leading-none xl:text-xl text-end'>
				{t("paragraph1")} <br /> {t("paragraph2")}
			</p>
			<div className='flex flex-col justify-center mt-5 md:justify-between md:flex-row'>
				<div className='w-full text-center md:text-start md:w-1/2'>
					<p className='text-xs font-light sm:text-sm xl:text-base font-poppins text-balance 2xl:text-lg 4xl:text-3xl'>
						I&apos;m helping startups and business owners to make a visual
						statement through spotless Web Design and Development so they can
						increase brand awareness and revenue. It all starts with the first
						impression right?
					</p>
					<div className='flex justify-center mt-3 md:justify-start gap-x-3 2xl:gap-x-5'>
						<Link
							className='dark:bg-[#696969] rounded-2xl px-2 py-1'
							href={"portfolio"}>
							Check my work
						</Link>
						<Link
							className='dark:bg-[#696969] rounded-2xl px-2 py-1'
							href={"contact"}>
							Contact with me
						</Link>
					</div>
				</div>
				<div className='w-full mt-5 text-center md:w-1/5 md:text-end md:mt-0'>
					<p className='text-lg font-medium xs:text-xl md:text-lg xl:text-xl 2xl:text-2xl 4xl:text-4xl'>
						Social Media
					</p>
					<div className='grid grid-cols-2 text-sm 4xl:text-2xl xs:text-base md:text-sm xl:text-base 2xl:text-lg md:grid-cols-1'>
						{socialMedia.map(el => (
							<p key={el.name}>
								<a href={el.link} target='_blank' rel='noopener noreferrer'>
									{el.name}
								</a>
							</p>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default HomeHeader;
