"use client";
import {
	CategoryType,
	PortfolioCategories,
	PortfolioItems,
	PortfolioSortItems,
	PortfolioSortType,
} from "@/shared/constant/const";
import { NextPage } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
//TODO Transition colors pagination/ pagination when change sort by change page to 1
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

	const handlePageChange = (page: number) => {
		if (page >= 1 && page <= totalPages) setCurrentPage(page);
	};

	// Pagination buttons
	const Pagination = () => (
		//TODO change arrows for flaticon
		<div className='flex justify-center gap-2 mt-6'>
			<button
				className='px-3 py-1 border rounded cursor-pointer bg-background dark:bg-dark-background disabled:opacity-50 disabled:cursor-not-allowed'
				onClick={() => handlePageChange(currentPage - 1)}
				disabled={currentPage === 1}>
				{"<-"}
			</button>
			{Array.from({ length: totalPages }, (_, i) => (
				<button
					key={i + 1}
					className={`px-3 py-1 rounded border cursor-pointer  ${
						currentPage === i + 1
							? " bg-dark-background text-dark-foreground dark:bg-background dark:text-foreground"
							: ""
					}`}
					onClick={() => handlePageChange(i + 1)}>
					{i + 1}
				</button>
			))}
			<button
				className='px-3 py-1 border rounded cursor-pointer bg-background dark:bg-dark-background disabled:opacity-50 disabled:cursor-not-allowed'
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage === totalPages}>
				{"->"}
			</button>
		</div>
	);
	return (
		<div className='m-2.5'>
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
					<Link
						href={`portfolio/${el.id}`}
						key={Math.random()}
						className='p-0 overflow-hidden transition-all ease-in-out duration-300  bg-white border shadow-sm group rounded-xl dark:bg-[#161616] hover:shadow-lg hover:border-primary'>
						<div className='relative w-full h-48 overflow-hidden'>
							<Image
								width={400}
								height={192}
								src='/img/portfolio/blank.jpg'
								alt='Portfolio Item'
								className='object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105'
							/>
							<div className='absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 bg-black/40'>
								<span className='px-3 py-1 text-xs font-medium text-white rounded-full'>
									{t("ViewDetails")}
								</span>
							</div>
						</div>
						<div className='p-4'>
							<div className='flex items-center mb-1'>
								<h3 className='mr-2 text-lg font-bold text-primary-dark dark:text-primary'>
									{el.title}
								</h3>
								<span title='Starred' className='text-sm text-yellow-400'>
									{el.favorite ? (
										<i className='fi fi-sr-star'></i>
									) : (
										<i className='fi fi-rr-star'></i>
									)}
								</span>
							</div>
							<p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
								{el.description}
							</p>
							<div className='flex items-center justify-between gap-2 mt-2'>
								<span className='px-2 py-0.5 text-xs font-semibold text-primary bg-primary/10 rounded'>
									{t(el.category)}
								</span>
								<span className='px-2 py-0.5 text-xs text-gray-400 dark:text-gray-500'>
									{el.date}
								</span>
							</div>
						</div>
					</Link>
				))}
			</div>
			{totalPages > 1 && <Pagination />}
		</div>
	);
};

export default Portfolio;
