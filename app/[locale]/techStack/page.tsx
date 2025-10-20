//TODO: link somewhere
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TechIcon from "@/shared/components/TechIcon";
import PageTitle from "@/shared/components/ui/PageTitle";
import {
	TechStackArray,
	type TechStackBase,
} from "@/shared/constant/TechStack";
import { useTranslations } from "next-intl";

const categories = [
	"All",
	"Frontend",
	"Backend",
	"Database",
	"Deployment",
	"Tools",
] as const;

export default function TechStackPage() {
	const [filter, setFilter] = useState<(typeof categories)[number]>("All");
	const [selectedTech, setSelectedTech] = useState<TechStackBase | null>(null);

	const filteredTechs = TechStackArray.filter(
		el => filter === "All" || el.category === filter
	);

	const tSince = useTranslations("time");
	const tDesc = useTranslations("techDesc");
	const tLevels = useTranslations("levels");
	const tLanguages = useTranslations("Languages");
	const tCategories = useTranslations("categoriesTech");

	return (
		<div className='p-4'>
			<PageTitle>Tech Stack</PageTitle>

			{/* Filtry kategorii */}
			<div className='flex flex-wrap gap-2 mb-6'>
				{categories.map(cat => (
					<motion.button
						key={cat}
						onClick={() => setFilter(cat)}
						whileTap={{ scale: 0.9 }}
						whileHover={{ scale: 1.05 }}
						className={`px-3 py-1 rounded-full transitionAll cursor-pointer ${
							filter === cat
								? "bg-blue-500 text-white"
								: "bg-gray-200 text-gray-700"
						}`}>
						{tCategories(cat)}
					</motion.button>
				))}
			</div>

			{/* Lista technologii */}
			<motion.div
				className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'
				initial='hidden'
				animate='visible'
				variants={{
					hidden: {},
					visible: { transition: { staggerChildren: 0.1 } },
				}}>
				<AnimatePresence mode='popLayout'>
					{filteredTechs.map(el => (
						<motion.div
							key={el.id}
							onClick={() => setSelectedTech(el)}
							layout
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.3, ease: "easeOut" }}
							className='relative p-4 bg-white border rounded-lg shadow-sm cursor-pointer transitionAll hover:scale-105 dark:bg-gray-800'>
							<div className='flex items-center justify-between'>
								<TechIcon id={el.id} />
								<p>
									{tSince("since")} {el.since.getFullYear()}
								</p>
							</div>
							{/* Pasek wiedzy */}
							<div className='w-full h-2 mt-2 overflow-hidden bg-gray-200 rounded'>
								<motion.div
									initial={{ width: 0 }}
									animate={{ width: el.KnowledgeWidth }}
									transition={{ duration: 0.8, ease: "easeOut" }}
									className='h-full bg-blue-500'
								/>
							</div>
						</motion.div>
					))}
				</AnimatePresence>
			</motion.div>

			{/* Modal */}
			<AnimatePresence>
				{selectedTech && (
					<motion.div
						key='modal'
						className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setSelectedTech(null)}>
						<motion.div
							className='relative w-11/12 max-w-md p-6 bg-white rounded-lg dark:bg-gray-800'
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.8, opacity: 0 }}
							transition={{ duration: 0.3, ease: "easeOut" }}
							onClick={e => e.stopPropagation()}>
							<button
								onClick={() => setSelectedTech(null)}
								className='absolute text-gray-500 top-2 right-2 hover:text-gray-700 dark:hover:text-white'>
								✕
							</button>
							<div className='flex flex-col items-center space-y-4'>
								<TechIcon id={selectedTech.id} />
								<p>
									{tLanguages("Level")}: {tLevels(selectedTech.knowledge)}
								</p>
								<p className='text-center text-gray-700 dark:text-gray-300'>
									{tDesc(selectedTech.id.toString())}
								</p>
								{selectedTech.docsUrl && (
									<a
										href={selectedTech.docsUrl}
										target='_blank'
										className='text-blue-500 underline'>
										{tDesc("Documentation")}
									</a>
								)}
								<div className='w-full h-2 mt-2 overflow-hidden bg-gray-200 rounded'>
									<motion.div
										initial={{ width: 0 }}
										animate={{ width: selectedTech.KnowledgeWidth }}
										transition={{ duration: 0.8, ease: "easeOut" }}
										className='h-full bg-blue-500'
									/>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
