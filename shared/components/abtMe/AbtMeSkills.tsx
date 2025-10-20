"use client";
import { TechStackArray } from "@/shared/constant/TechStack";
import SectionTitle from "../ui/SectionTitle";
import TechIcon from "../TechIcon";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

function AbtMeSkills() {
	const tLevels = useTranslations("levels");
	const tDesc = useTranslations("techDesc");
	const tSection = useTranslations("sectionTitle");

	return (
		<>
			<div className='flex items-center justify-between'>
				<SectionTitle>{tSection("MostImportantSkills")}</SectionTitle>
				<Link href={"/techStack"} className='hover:opacity-75 transitionAll'>
					Tech Stack
				</Link>
			</div>
			<div className='grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2 lg:grid-cols-3'>
				{TechStackArray.filter(a => a?.star).map((el, i) => (
					<motion.div
						key={el.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.3, delay: i * 0.05 }}
						className='px-4 py-3 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm shadow-sm 
                                   hover:shadow-md hover:scale-[1.02] transition-transform cursor-default'>
						<div className='flex items-center justify-between mb-2'>
							<TechIcon id={el.id} />
							<span className='text-sm font-medium'>
								{tLevels(el.knowledge)}
							</span>
						</div>
						<p className='text-sm leading-snug text-gray-600 dark:text-gray-300'>
							{tDesc(el.id.toString())}
						</p>
					</motion.div>
				))}
			</div>
		</>
	);
}

export default AbtMeSkills;
