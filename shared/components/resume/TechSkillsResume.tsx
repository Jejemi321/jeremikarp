"use client";

import { TechStackArray } from "@/shared/constant/TechStack";
import TechIcon from "../TechIcon";
import SectionTitle from "../ui/SectionTitle";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

function TechSkillsResume() {
	const sortedTechStack = [...TechStackArray]
		.sort((a, b) => a.since.getFullYear() - b.since.getFullYear())
		.slice(0, 20);

	const tTime = useTranslations("time");
	const tSection = useTranslations("sectionTitle");

	// kontener dla animacji siatki
	const containerVariants = {
		hidden: {},
		show: {
			transition: { staggerChildren: 0.15 },
		},
	};

	// pojedyncza karta
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
			<div className='flex items-center justify-between'>
				<SectionTitle>{tSection("TechSkills")}</SectionTitle>
				<Link href={"/techStack"} className='hover:opacity-75 transitionAll'>
					TechStack
				</Link>
			</div>

			<motion.div
				className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5'
				variants={containerVariants}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.2 }}>
				{sortedTechStack.map(el => (
					<motion.div
						key={el.id}
						className='px-5 py-2.5 rounded-xl border'
						variants={cardVariants}>
						{/* Nagłówek */}
						<div className='flex items-center justify-between'>
							<TechIcon id={el.id} />
							<p className='text-sm capitalize'>
								{tTime("since")} {el.since.getFullYear()}
							</p>
						</div>

						{/* Pasek wiedzy */}
						{/* <div className='border rounded-2xl h-2.5 mt-2.5 mb-1 overflow-hidden'>
							<motion.div
								className='h-full bg-foreground dark:bg-dark-foreground rounded-2xl'
								initial={{ width: "0%" }}
								whileInView={{ width: el.KnowledgeWidth }} // np. "80%"
								transition={{ duration: 0.8, ease: "easeOut" }}
								viewport={{ once: true }}
							/>
						</div> */}
					</motion.div>
				))}
			</motion.div>
		</>
	);
}

export default TechSkillsResume;
