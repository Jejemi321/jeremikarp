"use client";
import { main, SocialMedia } from "@/shared/constant/const";
import Image from "next/image";
import SectionTitle from "./ui/SectionTitle";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

function BasicInfo() {
	const tAboutMe = useTranslations("aboutMe");
	const tSection = useTranslations("sectionTitle");

	const containerVariants = {
		hidden: {},
		show: { transition: { staggerChildren: 0.15 } },
	};

	const textVariants = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	const imageVariants = {
		hidden: { opacity: 0, scale: 0.95 },
		show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
	};

	return (
		<>
			<SectionTitle>{tSection("BasicInfo")}</SectionTitle>
			<motion.div
				className='flex flex-col items-center gap-8 px-6 lg:flex-row lg:items-start xl:justify-center lg:gap-12 lg:px-12 xl:px-20'
				variants={containerVariants}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.2 }}>
				<motion.div variants={imageVariants}>
					<Image
						src={main}
						alt=''
						className='w-56 h-auto rounded-4xl xl:w-72 lg:w-80'
						width={300}
						height={500}
					/>
				</motion.div>

				<motion.div
					className='text-center lg:text-left'
					variants={textVariants}>
					<motion.h1
						className='text-3xl lg:text-4xl font-bold mb-2.5'
						variants={textVariants}>
						Jeremi Karp
					</motion.h1>
					<motion.h2
						className='mb-5 text-xl lg:text-2xl opacity-90'
						variants={textVariants}>
						Frontend/React Developer
					</motion.h2>
					<motion.p
						className='max-w-xl mb-5 leading-7 text-justify'
						variants={textVariants}>
						{tAboutMe("desc")}
					</motion.p>
					<motion.div
						className='flex justify-center gap-5 lg:justify-start'
						variants={textVariants}>
						{SocialMedia.map(el => (
							<motion.a
								key={el.id}
								href={el.link}
								target='_blank'
								whileHover={{ scale: 1.1 }}
								className=' hover:opacity-75'>
								<i className={`${el.icon} transitionAll size-5 text-xl`} />
							</motion.a>
						))}
					</motion.div>
				</motion.div>
			</motion.div>
		</>
	);
}

export default BasicInfo;
