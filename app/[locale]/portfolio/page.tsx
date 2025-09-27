"use client";
import Pagination from "@/shared/components/Pagination";
import PortfolioItem from "@/shared/components/PortfolioItem";
import PageTitle from "@/shared/components/ui/PageTitle";
import {
	CategoryType,
	PortfolioCategories,
	PortfolioSortItems,
	PortfolioSortType,
} from "@/shared/constant/const";
import { PortfolioItems } from "@/shared/constant/PortfolioItems";
import { NextPage } from "next";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion } from "framer-motion";

const Portfolio: NextPage = () => {
	const [Category, setCategory] = useState<CategoryType>(
		PortfolioCategories[0].name
	);
	const [SortBy, setSortBy] = useState<PortfolioSortType>(
		PortfolioSortItems[0].name
	);
	const t = useTranslations("portfolio");
	const ITEMS_PER_PAGE = 8;
	const [currentPage, setCurrentPage] = useState(1);

	const filteredItems = PortfolioItems.filter(
		item => item.category === Category || Category === "CategoryAll"
	).sort((a, b) => {
		if (SortBy === "AtoZ") return a.title.localeCompare(b.title);
		if (SortBy === "ZtoA") return b.title.localeCompare(a.title);
		if (SortBy === "Newest")
			return new Date(b.date).getTime() - new Date(a.date).getTime();
		if (SortBy === "Oldest")
			return new Date(a.date).getTime() - new Date(b.date).getTime();
		if (SortBy === "Favorites")
			return (b.favorite ? 1 : 0) - (a.favorite ? 1 : 0);
		return 0;
	});

	const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
	const paginatedItems = filteredItems.slice(
		(currentPage - 1) * ITEMS_PER_PAGE,
		currentPage * ITEMS_PER_PAGE
	);

	const titleT = useTranslations("title");

	const containerVariants = {
		hidden: {},
		show: {
			transition: { staggerChildren: 0.15 },
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
	};

	return (
		<div className='m-2.5'>
			<PageTitle>{titleT("Portfolio")}</PageTitle>

			<div className='flex items-center justify-end mb-4 sm:justify-between'>
				<div className='items-center hidden gap-1 sm:flex'>
					{PortfolioCategories.map(category => (
						<div
							key={category.id}
							className={`border rounded-md px-2.5 py-0.5 cursor-pointer transition-colors ease-in-out hover:opacity-75 duration-300 ${
								Category === category.name &&
								"dark:bg-background dark:text-foreground bg-dark-background text-dark-foreground hover:opacity-100"
							}`}
							onClick={() => setCategory(category.name)}>
							{t(category.name)}
						</div>
					))}
				</div>
				<select
					value={SortBy}
					onChange={e => setSortBy(e.target.value)}
					className='border rounded-md px-2.5 py-0.5 cursor-pointer'>
					{PortfolioSortItems.map(el => (
						<option key={el.id} value={el.name}>
							{t(el.name)}
						</option>
					))}
				</select>
			</div>

			<motion.div
				className='grid grid-cols-1 gap-4 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
				variants={containerVariants}
				initial='hidden'
				animate='show'>
				{paginatedItems.map(el => (
					<motion.div key={el.id} variants={itemVariants}>
						<PortfolioItem el={el} />
					</motion.div>
				))}
			</motion.div>

			{totalPages > 1 && (
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					setCurrentPage={setCurrentPage}
				/>
			)}
		</div>
	);
};

export default Portfolio;
