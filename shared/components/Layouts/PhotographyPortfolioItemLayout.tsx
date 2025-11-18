"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { PhotoPortfolioItemsType } from "@/shared/constant/PhotoPortfolioItems";
import ImageWithRatio from "../ui/ImageWithRatio";

function shuffleArray<T>(array: T[]): T[] {
	const shuffled = [...array];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}

function PhotographyPortfolioItemLayout({
	el,
}: {
	el: PhotoPortfolioItemsType;
}) {
	const t = useTranslations("photoPortfolioProjects");

	const textVariants = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	const containerVariants = {
		hidden: {},
		show: { transition: { staggerChildren: 0.1 } },
	};

	return (
		<motion.div
			className='mb-2.5'
			variants={containerVariants}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true, amount: 0.2 }}>
			<motion.div variants={textVariants} className='mb-2.5'>
				<h2 className='text-5xl font-bold uppercase sm:text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl'>
					{t(el.title)}
				</h2>
				<p className='text-sm sm:text-base'>{t(el.description)}</p>
			</motion.div>

			<div
				className={`grid grid-cols-1 gap-2 ${
					el.class ? el.class : "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
				} grid-flow-dense`}>
				{el.imgArray?.map((img, i) => (
					<ImageWithRatio key={i} img={img} />
				))}
			</div>
		</motion.div>
	);
}

export default PhotographyPortfolioItemLayout;
