"use client";

import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Language } from "@/shared/constant/data";

function LanguagesResume() {
	const tSection = useTranslations("sectionTitle");
	const tLanguage = useTranslations("Languages");

	const containerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
			},
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		show: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.4, ease: "easeOut" as const },
		},
	};

	return (
		<>
			<SectionTitle>{tSection("Languages")}</SectionTitle>
			<motion.div
				variants={containerVariants}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.2 }}
				className='grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2'>
				{Language.map(el => (
					<motion.div
						key={el.id}
						variants={cardVariants}
						className='flex items-center justify-between px-3 py-1.5 transition shadow-sm border rounded-xl hover:shadow-md'>
						<div className='flex gap-x-2.5 items-center'>
							<Image
								alt={el.name}
								width={44}
								height={32}
								src={`https://flagsapi.com/${el.short}/flat/64.png`}
							/>
							<p className='text-lg font-medium'>{tLanguage(el.name)}</p>
						</div>
						<div className='flex gap-x-0.5'>
							<p>{tLanguage("Level")}:</p>
							<p>{el.level === "Native" ? tLanguage(el.level) : el.level}</p>
						</div>
					</motion.div>
				))}
			</motion.div>
		</>
	);
}

export default LanguagesResume;
