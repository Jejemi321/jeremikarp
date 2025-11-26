"use client";

import { useTranslations } from "next-intl";
import LivePreview from "../LivePreview";
import ProjectInfoPanel from "../RightSideWeb";
import { WebPortfolioItemType } from "@/shared/constant/WebPortfolioItems";
import PortfolioTitleElement from "../ui/PortfolioTitleElement";

function WebsitePortfolioItemLayout({ el }: { el: WebPortfolioItemType }) {
	const tpP = useTranslations("webPortfolioProjects");
	return (
		<section className=''>
			<PortfolioTitleElement title={tpP(el.title)} desc={tpP(el.description)} />
			<div className='flex flex-col lg:flex-row gap-6 min-h-[60vh] lg:h-[80vh] mt-2.5'>
				<LivePreview el={el} />
				<ProjectInfoPanel el={el} />
			</div>
		</section>
	);
}
export default WebsitePortfolioItemLayout;
