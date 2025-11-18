"use client";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { PortfolioItemType } from "../constant/PortfolioItems";
import { motion } from "framer-motion";

function PortfolioItem({ el }: { el: PortfolioItemType }) {
	const t = useTranslations("portfolio");
	const tPPP = useTranslations("photoPortfolioProjects");
	const tWPP = useTranslations("webPortfolioProjects");
	const tVPP = useTranslations("videoPortfolioProjects"); // nowy translator

	// wybierz odpowiedni translator na podstawie kategorii
	const tCategory =
		el.category === "CategoryPhotography"
			? tPPP
			: el.category === "CategoryWebsite"
			? tWPP
			: el.category === "CategoryVideo"
			? tVPP
			: t; // domyślny tłumacz

	// przetłumaczony opis
	const translatedDescription = tCategory(el.description);

	return (
		<Link href={`portfolio/${el.id}`} key={el.id} passHref>
			<motion.div
				className='p-0 overflow-hidden bg-white border shadow-sm rounded-xl dark:bg-[#161616] hover:shadow-lg hover:border-primary'
				whileHover={{ scale: 1.03 }}
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4 }}>
				<div className='relative w-full overflow-hidden h-75'>
					<Image
						width={400}
						height={300}
						src={el.imageCover}
						alt='Portfolio Item'
						className='object-cover w-full h-full'
					/>
					<div className='absolute inset-0 flex items-center justify-center transition-opacity opacity-0 hover:opacity-100 bg-black/40'>
						<span className='px-3 py-1 text-xs font-medium text-white rounded-full'>
							{t("ViewDetails")}
						</span>
					</div>
				</div>

				<div className='p-4'>
					<div className='flex items-center mb-1'>
						<h3 className='mr-2 text-lg font-bold uppercase text-primary-dark dark:text-primary'>
							{tCategory(el.title)}
						</h3>
						<span title='Starred' className='text-sm text-yellow-400'>
							{el.favorite ? (
								<i className='fi fi-sr-star'></i>
							) : (
								<i className='fi fi-rr-star'></i>
							)}
						</span>
					</div>
					<p className='mb-2 text-sm tracking-tight text-gray-500 dark:text-gray-400'>
						{translatedDescription.length > 40
							? translatedDescription.slice(
									0,
									translatedDescription.slice(0, 40).lastIndexOf(" ")
							  ) + "..."
							: translatedDescription}
					</p>
					<div className='flex items-center justify-between gap-2 mt-2'>
						<span className='px-2 py-0.5 text-xs font-semibold text-primary bg-primary/10 rounded'>
							{t(el.category)}
						</span>
						<span className='px-2 py-0.5 text-xs text-gray-400 dark:text-gray-500'>
							{el.fromDate ? el.fromDate.trim().split("-")[0] + " - " : ""}
							{el.date.trim().split("-")[0]}
						</span>
					</div>
				</div>
			</motion.div>
		</Link>
	);
}

export default PortfolioItem;
