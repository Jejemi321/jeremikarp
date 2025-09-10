//TODO Transition colors pagination/ pagination when change sort by change page to 1
"use client";
import Pagination from "@/shared/components/Pagination";
import PortfolioItem from "@/shared/components/PortfolioItem";
import SectionTitle from "@/shared/components/ui/SectionTitle";
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
const Portfolio: NextPage = () => {
	const [Category, setCategory] = useState<CategoryType>(
		PortfolioCategories[0].name
	); //value All, Website, Photography
	const [SortBy, setSortBy] = useState<PortfolioSortType>(
		PortfolioSortItems[0].name
	); //value AtoZ, ZtoA, Newest, Oldest, Favorites
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

	// Pagination buttons

	const titleT = useTranslations("title");

	return (
		<div className='m-2.5'>
			<SectionTitle>{titleT("Portfolio")}</SectionTitle>

			<div className='flex items-center justify-between mb-4'>
				<div className='flex items-center gap-1'>
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
					name=''
					id=''
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
			<div className='grid grid-cols-1 gap-4 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
				{paginatedItems.map(el => (
					<PortfolioItem key={el.id} el={el} />
				))}
			</div>
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
