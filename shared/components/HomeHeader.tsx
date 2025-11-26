"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SocialMedia } from "../constant/data";

function HomeHeader() {
	const t = useTranslations("home");
	const delayP = (t("headerTop").length + t("headerDown").length) * 0.2 + 0.2;
	return (
		<>
			<h3 className='text-[3.5rem] uppercase leading-none mt-2.5 3xs:text-[4rem] 4xl:text-[27rem] xs:text-[5.8rem] lg:text-[10.5rem] xl:text-[13.5rem] 2xl:text-[15rem] sm:text-[7rem] md:text-[8.5rem] 2xs:text-7xl 2xs:mb-3 xs:mb-0'>
				{t("headerTop")
					.split("")
					.map((letter, index) => (
						<motion.span
							key={index}
							initial={{ opacity: 0.1 }}
							animate={{ opacity: 1 }}
							transition={{
								duration: 0.3,
								delay: index * 0.2,
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
							initial={{ opacity: 0.1 }}
							animate={{ opacity: 1 }}
							transition={{
								duration: 0.3,
								delay: t("headerTop").length * 0.2 + index * 0.2,
							}}>
							{letter}
						</motion.span>
					))}
			</h3>
			<motion.p
				initial={{ opacity: 0.1 }}
				animate={{ opacity: 1 }}
				transition={{
					duration: 0.3,
					delay: (t("headerTop").length + t("headerDown").length) * 0.2 + 0.2,
				}}
				className='text-xs leading-5 3xl:text-2xl 2xs:text-lg 3xs:text-base 4xl:text-5xl md:text-lg md:leading-none xl:text-xl text-end'>
				{t("paragraph1")} <br /> {t("paragraph2")}
			</motion.p>
			<div className='flex flex-col justify-center mt-5 md:justify-between md:flex-row'>
				<div className='w-full text-center md:text-start md:w-1/2'>
					<motion.p
						initial={{ opacity: 0.1 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: delayP + 0.4 }}
						className='text-xs font-light sm:text-sm xl:text-base font-poppins text-balance 2xl:text-lg 4xl:text-3xl'>
						{t("paragraph3")}
					</motion.p>
					<motion.div
						initial={{ opacity: 0.1 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: delayP + 1 }}
						className='flex justify-center mt-3 md:justify-start gap-x-3 2xl:gap-x-5'>
						<Link
							className='px-3 py-1 font-medium transition-all duration-300 ease-in-out dark:bg-dark-foreground dark:text-dark-background bg-foreground text-background opacity-90 hover:opacity-100 rounded-2xl'
							href={"portfolio"}>
							{t("SeeMyWork")}
						</Link>
						<Link
							className='px-3 py-1 font-medium transition-all duration-300 ease-in-out dark:bg-dark-foreground dark:text-dark-background bg-foreground text-background opacity-90 hover:opacity-100 rounded-2xl'
							href={"contact"}>
							{t("ContactWithMe")}
						</Link>
					</motion.div>
				</div>
				<div className='w-full mt-5 text-center md:w-1/5 md:text-end md:mt-0'>
					<motion.p
						initial={{ opacity: 0.1 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3, delay: delayP + 1.5 }}
						className='text-lg font-medium uppercase xs:text-xl md:text-lg xl:text-xl 2xl:text-2xl 4xl:text-4xl'>
						{t("SocialMedia")}
					</motion.p>
					<div className='grid grid-cols-2 text-sm 4xl:text-2xl xs:text-base md:text-sm xl:text-base 2xl:text-lg md:grid-cols-1'>
						{SocialMedia.map((el, index) => (
							<motion.p
								initial={{ opacity: 0.1 }}
								animate={{ opacity: 1 }}
								transition={{
									duration: 0.3,
									delay: (delayP + 1.5) * 1.05 + index * 0.2,
								}}
								key={el.name}>
								<a href={el.link} target='_blank' rel='noopener noreferrer'>
									{el.name}
								</a>
							</motion.p>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default HomeHeader;
