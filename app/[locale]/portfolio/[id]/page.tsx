import PhotographyPortfolioItemLayout from "@/shared/components/PhotographyPortfolioItemLayout";
import WebsitePortfolioItemLayout from "@/shared/components/WebsitePortfolioItemLayout";
import {
	PortfolioItems,
	PortfolioItemType,
} from "@/shared/constant/PortfolioItems";
import { WebPortfolioItemType } from "@/shared/constant/WebPortfolioItems";
import Link from "next/link";
import { notFound } from "next/navigation";

function isWebPortfolioItem(
	item: PortfolioItemType
): item is WebPortfolioItemType & { id: number } {
	return item.category === "CategoryWebsite";
}

export default async function PortfolioItemPage({
	params,
}: {
	params: Promise<{ locale: string; id: string }>;
}) {
	const { locale, id } = await params;

	const item = PortfolioItems[Number(id) - 1];

	if (!item) notFound();

	return (
		<div className='px-20'>
			<Link href={`/${locale}/portfolio`}>
				<i className='text-3xl fi fi-rr-arrow-small-left size-5'></i>
			</Link>

			{isWebPortfolioItem(item) ? (
				<WebsitePortfolioItemLayout el={item} />
			) : (
				<PhotographyPortfolioItemLayout el={item} />
			)}
		</div>
	);
}
