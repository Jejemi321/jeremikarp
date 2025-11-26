"use client";

import SectionTitle from "../ui/SectionTitle";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Language } from "@/shared/constant/data";
import CardResume from "./CardResume";
import { cardVariants, containerVariants } from "./FrameVariants";

function LanguagesResume() {
	const tSection = useTranslations("sectionTitle");
	const tLanguage = useTranslations("Languages");

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
					<CardResume
						id={el.id}
						key={el.id}
						title={tLanguage(el.name)}
						imageSrc={`https://flagsapi.com/${el.short}/flat/64.png`}
						subTitle={el.level === "Native" ? tLanguage(el.level) : el.level}
						variants={cardVariants}
					/>
				))}
			</motion.div>
		</>
	);
}

export default LanguagesResume;
