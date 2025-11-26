//TODO:same size all of skill
"use client";

import { TechStackArray } from "@/shared/constant/TechStack";
import TechIcon from "../TechIcon";
import SectionTitle from "../ui/SectionTitle";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import CardResume from "./CardResume";
import { cardVariants, containerVariants } from "./FrameVariants";

function TechSkillsResume() {
	const sortedTechStack = [...TechStackArray]
		.sort((a, b) => a.since.getFullYear() - b.since.getFullYear())
		.slice(0, 20);

	const tTime = useTranslations("time");
	const tSection = useTranslations("sectionTitle");

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
					<CardResume
						id={el.id}
						key={el.id}
						title={el.name}
						icon={<TechIcon id={el.id} />}
						subTitle={`${tTime("since")} ${el.since.getFullYear()}`}
						variants={cardVariants}
					/>
				))}
			</motion.div>
		</>
	);
}

export default TechSkillsResume;
