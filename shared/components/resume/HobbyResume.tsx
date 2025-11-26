"use client";
import SectionTitle from "../ui/SectionTitle";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Hobby } from "@/shared/constant/data";

function HobbyResume() {
	const date = new Date();
	const tH = useTranslations("Hobby");

	const containerVariants = {
		hidden: {},
		show: {
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
	};

	return (
		<>
			<SectionTitle>Hobby</SectionTitle>
			<motion.div
				className='grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-2.5'
				variants={containerVariants}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.2 }}>
				{Hobby.map(el => (
					<motion.div
						key={el.id}
						variants={itemVariants}
						whileHover={{ scale: 1.01 }}
						className='flex justify-between border px-2.5 py-2 rounded-xl transition-transform'>
						<div className='flex items-center gap-x-1'>
							<i className={`${el.iconClass} text-xl size-5`}></i>
							<p>{tH(el.name)}</p>
						</div>
						<p>{date.getFullYear() - el.years.getFullYear()} years</p>
					</motion.div>
				))}
			</motion.div>
		</>
	);
}

export default HobbyResume;
