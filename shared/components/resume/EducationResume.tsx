"use client";
import SectionTitle from "../ui/SectionTitle";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SchoolsArray } from "@/shared/constant/data";

function EducationResume() {
	const tSection = useTranslations("sectionTitle");
	const tEducation = useTranslations("Education");

	const containerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, x: -30 },
		show: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.5, ease: "easeOut" as const },
		},
	};

	return (
		<>
			<SectionTitle>{tSection("Education")}</SectionTitle>
			<div className='flex justify-center'>
				<div>
					<h2 className='mb-6 text-xl font-bold text-center'>Schools</h2>
					<motion.ul
						variants={containerVariants}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true, amount: 0.2 }}
						className='relative space-y-6 md:pr-6'>
						{[...SchoolsArray].reverse().map((item, index) => (
							<motion.li key={index} variants={itemVariants}>
								<div className='p-4 transition shadow rounded-xl bg-white/5 hover:shadow-md'>
									<p className='text-sm text-gray-500'>
										{item.from} {"–"} {item.to}
									</p>
									<a
										target='_blank'
										href={item.web}
										className='text-lg font-semibold hover:opacity-75'>
										{tEducation(item.id.toString())}
									</a>
									<p className='text-gray-700 dark:text-gray-300'>
										{tEducation(item.level)}
									</p>
								</div>
							</motion.li>
						))}
					</motion.ul>
				</div>
			</div>
		</>
	);
}

export default EducationResume;
