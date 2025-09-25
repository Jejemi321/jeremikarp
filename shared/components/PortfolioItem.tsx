import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { PortfolioItemType } from "../constant/PortfolioItems";

function PortfolioItem({ el }: { el: PortfolioItemType }) {
	const t = useTranslations("portfolio");
	const tP = useTranslations("portfolioProjects");
	return (
		<Link
			href={`portfolio/${el.id}`}
			key={el.id}
			className='p-0 overflow-hidden transition-all ease-in-out duration-300  bg-white border shadow-sm group rounded-xl dark:bg-[#161616] hover:shadow-lg hover:border-primary'>
			<div className='relative w-full overflow-hidden h-75'>
				<Image
					width={400}
					height={300}
					src={el.imageCover}
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
					<h3 className='mr-2 text-lg font-bold uppercase text-primary-dark dark:text-primary'>
						{tP(el.title)}
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
					{tP(el.description).length > 45
						? tP(el.description).slice(
								0,
								tP(el.description).slice(0, 45).lastIndexOf(" ")
						  ) + "..."
						: tP(el.description)}
				</p>
				<div className='flex items-center justify-between gap-2 mt-2'>
					<span className='px-2 py-0.5 text-xs font-semibold text-primary bg-primary/10 rounded'>
						{t(el.category)}
					</span>
					<span className='px-2 py-0.5 text-xs text-gray-400 dark:text-gray-500'>
						{el.date.trim().split("-")[0]}
					</span>
				</div>
			</div>
		</Link>
	);
}

export default PortfolioItem;
