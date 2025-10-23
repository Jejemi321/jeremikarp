"use client";
import { WebPortfolioItemType } from "../constant/WebPortfolioItems";
import { useTranslations } from "next-intl";
import ProjectInfoPanel from "./RightSideWeb";
import LivePreview from "./LivePreview";
function WebsitePortfolioItemLayout({ el }: { el: WebPortfolioItemType }) {
	const tpP = useTranslations("portfolioProjects");
	return (
		<section className=''>
			{/* Tytuł projektu */}
			<div className='space-y-3'>
				<h2 className='text-4xl font-bold text-center uppercase lg:text-6xl lg:text-left'>
					{tpP(el.title)}
				</h2>
				<p className='text-base leading-relaxed text-center text-muted-foreground lg:text-left'>
					{tpP(el.description)}
				</p>
			</div>

			{/* Kontener główny */}
			<div className='flex flex-col lg:flex-row gap-6 min-h-[60vh] lg:h-[80vh] mt-2.5'>
				{/* Lewa sekcja */}
				<LivePreview el={el} />
				{/* Prawa sekcja */}
				<ProjectInfoPanel el={el} />
			</div>
		</section>
	);
}
export default WebsitePortfolioItemLayout;
