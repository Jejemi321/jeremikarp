//TODO: showing projects with this language
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
import ModalTechStack from "@/shared/components/ModalTechStack";

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
	const tCategories = useTranslations("categoriesTech");

	return (
		<div className='p-4'>
			<PageTitle>Tech Stack</PageTitle>

			{/* Filtry kategorii */}
			<div className='flex flex-wrap gap-2 mb-6'>
				{categories.map(cat => (
					<motion.button
						key={cat}
						onClick={() => {
							setFilter(cat);
						}}
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
							onClick={() => setSelectedTech(el as TechStackBase)} // ✅ assert shared base
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
						</motion.div>
					))}
				</AnimatePresence>
			</motion.div>

			{/* Modal */}
			<ModalTechStack
				selectedTech={selectedTech}
				setSelectedTech={setSelectedTech}
			/>
		</div>
	);
}
