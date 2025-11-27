"use client";
import Pagination from "@/shared/components/Pagination";
import PortfolioItem from "@/shared/components/PortfolioItem";
import PageTitle from "@/shared/components/ui/PageTitle";
import {
	PortfolioItems,
	PortfolioItemType,
} from "@/shared/constant/PortfolioItems";
import { NextPage } from "next";
import { useTranslations } from "next-intl";
import { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import {
	PortfolioCategories,
	PortfolioSortItems,
} from "@/shared/constant/data";
import { CategoryType, PortfolioSortType } from "@/shared/types";
import {
	containerVariants,
	cardVariants,
} from "@/shared/components/resume/FrameVariants";
const Portfolio: NextPage = () => {
	const [Category, setCategory] = useState<CategoryType>(
		PortfolioCategories[0].name
	);
	const [SortBy, setSortBy] = useState<PortfolioSortType>(
		PortfolioSortItems[0].name
	);
	const [currentPage, setCurrentPage] = useState(1);
	const ITEMS_PER_PAGE = 20;
	const t = useTranslations("portfolio");
	const titleT = useTranslations("title");
	const sortPortfolio = useCallback(
		(a: PortfolioItemType, b: PortfolioItemType) => {
			switch (SortBy) {
				case "AtoZ":
					return a.title.localeCompare(b.title);
				case "ZtoA":
					return b.title.localeCompare(a.title);
				case "Newest":
					return new Date(b.date).getTime() - new Date(a.date).getTime();
				case "Oldest":
					return new Date(a.date).getTime() - new Date(b.date).getTime();
				case "Favorites":
					return (b.favorite ? 1 : 0) - (a.favorite ? 1 : 0);
				default:
					return 0;
			}
		},
		[SortBy]
	);
	const filteredItems = useMemo(() => {
		return PortfolioItems.filter(
			item => item.category === Category || Category === "CategoryAll"
		).sort((a, b) => {
			const result = sortPortfolio(a, b);
			return result === 0
				? new Date(b.date).getTime() - new Date(a.date).getTime()
				: result;
		});
	}, [Category, sortPortfolio]);
	const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
	const paginatedItems = filteredItems.slice(
		(currentPage - 1) * ITEMS_PER_PAGE,
		currentPage * ITEMS_PER_PAGE
	);
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
							onClick={() => {
								setCategory(category.name);
								setCurrentPage(1);
								window.scrollTo({ top: 0, behavior: "smooth" });
							}}>
							{t(category.name)}
						</div>
					))}
				</div>
				<select
					value={SortBy}
					onChange={e => {
						setSortBy(e.target.value as PortfolioSortType);
						setCurrentPage(1);
						window.scrollTo({ top: 0, behavior: "smooth" });
					}}
					className='border rounded-md px-2.5 py-0.5 cursor-pointer'>
					{PortfolioSortItems.map(el => (
						<option key={el.id} value={el.name}>
							{t(el.name)}
						</option>
					))}
				</select>
			</div>
			<motion.div
				key={currentPage}
				className='grid grid-cols-1 gap-4 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
				variants={containerVariants}
				initial='hidden'
				animate='show'>
				{paginatedItems.map(el => (
					<motion.div key={`${el.id}-${currentPage}`} variants={cardVariants}>
						<PortfolioItem el={el} />
					</motion.div>
				))}
			</motion.div>
			{totalPages > 1 && (
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					setCurrentPage={page => {
						setCurrentPage(page);
						window.scrollTo({ top: 0, behavior: "smooth" });
					}}
				/>
			)}
		</div>
	);
};
export default Portfolio;
