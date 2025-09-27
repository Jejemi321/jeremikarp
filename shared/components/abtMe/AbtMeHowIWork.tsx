"use client";
import { IoMdRocket } from "react-icons/io";
import SectionTitle from "../ui/SectionTitle";
import {
	FiUser,
	FiFileText,
	FiLayout,
	FiCode,
	FiCheckCircle,
} from "react-icons/fi";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const steps = [
	{ title: "ConsultationTitle", desc: "ConsultationDesc", icon: <FiUser /> },
	{ title: "PlanningTitle", desc: "PlanningDesc", icon: <FiFileText /> },
	{ title: "DesignTitle", desc: "DesignDesc", icon: <FiLayout /> },
	{ title: "DevelopmentTitle", desc: "DevelopmentDesc", icon: <FiCode /> },
	{ title: "TestingTitle", desc: "TestingDesc", icon: <FiCheckCircle /> },
	{ title: "DeploymentTitle", desc: "DeploymentDesc", icon: <IoMdRocket /> },
];

const containerVariants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.15,
		},
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function AbtMeHowIWork() {
	const tS = useTranslations("sectionTitle");
	const tSteps = useTranslations("steps");

	return (
		<section className='py-12'>
			<SectionTitle>{tS("HowIWork")}</SectionTitle>
			<motion.div
				className='grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3'
				variants={containerVariants}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.2 }}>
				{steps.map((step, index) => (
					<motion.div
						key={index}
						className='flex flex-col items-center p-4 text-center transition-transform border bg-white/5 backdrop-blur-sm rounded-xl'
						variants={cardVariants}
						whileHover={{ scale: 1.05 }}>
						<div className='mb-2 text-3xl'>{step.icon}</div>
						<h3 className='mb-1 font-semibold'>{tSteps(step.title)}</h3>
						<p className='text-sm text-gray-600 dark:text-gray-300'>
							{tSteps(step.desc)}
						</p>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
}

export default AbtMeHowIWork;
