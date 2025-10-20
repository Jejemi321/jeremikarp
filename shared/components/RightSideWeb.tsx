"use client";
import { motion } from "framer-motion";
import TechIcon from "./TechIcon";
import { WebPortfolioItemType } from "../constant/WebPortfolioItems";
import { useTranslations } from "next-intl";

function ProjectInfoPanel({ el }: { el: WebPortfolioItemType }) {
	const fadeInUp = {
		initial: { opacity: 0, y: 10 },
		animate: { opacity: 1, y: 0 },
	};
	const t = useTranslations("portfolioWeb");
	const tTime = useTranslations("time");
	const tInfo = useTranslations("portfolioProjects");

	return (
		<div className='flex-shrink-0 w-full p-4 space-y-4 overflow-y-auto rounded-lg shadow-lg lg:w-1/4 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700'>
			{/* Basic Info */}
			<motion.div {...fadeInUp} transition={{ duration: 0.3 }}>
				<h4 className='mb-2 text-xl font-semibold text-center lg:text-left'>
					{t("BasicInfo")}
				</h4>
				<div className='space-y-1 text-sm lg:text-base'>
					<p>
						<span className='font-medium'>{t("Title")}:</span> {tInfo(el.title)}
					</p>
					<p className=''>
						<span className='font-medium'>{t("Description")}:</span>{" "}
						{tInfo(el.description)}
					</p>
					<p className='flex items-center gap-2'>
						Status:
						<span
							className={`inline-block h-5 px-2 py-0.5 rounded-full text-white text-xs font-medium ${
								el.status === "Finish"
									? "bg-green-500"
									: el.status === "InProgress"
									? "bg-orange-500"
									: "bg-gray-500"
							}`}>
							{t(el.status)}
						</span>
					</p>
					<p>
						<span className='font-medium'>{t("Role")}:</span> {el.role}
					</p>
					{el.url && (
						<a
							href={el.url}
							target='_blank'
							className='inline-flex items-center gap-1 transitionAll hover:text-blue-700'>
							URL: {el.url.replace(/^https?:\/\//, "")}
						</a>
					)}
					<p>
						<span className='font-medium'>{t("Client")}:</span> {el.client}
					</p>
					<p>
						<span className='font-medium'>{t("Duration")}:</span>{" "}
						{tTime(el.duration)}
					</p>
					{el.starterDate && (
						<p>
							<span className='font-medium'>{t("From")}:</span>{" "}
							{el.starterDate.split("-").reverse().join(".")}
						</p>
					)}
					{el.date && (
						<p>
							<span className='font-medium'>{t("To")}:</span>{" "}
							{el.date.split("-").reverse().join(".")}
						</p>
					)}
				</div>
			</motion.div>

			{/* Features */}
			<motion.div {...fadeInUp} transition={{ duration: 0.3, delay: 0.1 }}>
				<h4 className='mb-2 text-xl font-semibold text-center lg:text-left'>
					{t("Features")}
				</h4>
				<div className='flex flex-col gap-1 text-sm lg:text-base'>
					<p className='flex items-center gap-2'>
						DarkMode:
						<span
							className={`inline-block h-5 px-2 py-0.5 rounded-full text-white text-xs font-medium ${
								el.darkMode ? "bg-green-500" : "bg-red-500"
							}`}>
							{el.darkMode ? t("Yes") : t("No")}
						</span>
					</p>
					<div className='flex items-center gap-x-2'>
						<p className=''>{t("Languages")}: </p>
						{el.supportedLanguages && (
							<div className='flex flex-wrap gap-2'>
								{el.supportedLanguages.map((lang, i) => (
									<span
										key={i}
										className='bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded-full px-2 py-0.5 text-xs font-medium'>
										{lang}
									</span>
								))}
							</div>
						)}
					</div>
				</div>
			</motion.div>

			{/* Tech Stack */}
			{el?.techStack && (
				<motion.div {...fadeInUp} transition={{ duration: 0.3, delay: 0.2 }}>
					<h4 className='mb-2 text-xl font-semibold text-center lg:text-left'>
						Tech Stack
					</h4>
					<div className='flex flex-wrap gap-2'>
						{el?.techStack?.map((id, i) => (
							<span
								key={i}
								className='flex items-center gap-1 px-2 py-1 text-xs font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-200'>
								<TechIcon id={id} />
							</span>
						))}
					</div>
				</motion.div>
			)}
		</div>
	);
}

export default ProjectInfoPanel;
