// TODO: add actual portfolio item content/animations
import PhotographyPortfolioItemLayout from "@/shared/components/PhotographyPortfolioItemLayout";
import WebsitePortfolioItemLayout from "@/shared/components/WebsitePortfolioItemLayout";
import { PortfolioItems } from "@/shared/constant/PortfolioItems";
import { notFound } from "next/navigation";

export default async function PortfolioItemPage({
	params,
}: {
	params: Promise<{ locale: string; id: string }>;
}) {
	const { locale, id } = await params;

	const item = PortfolioItems[Number(id) - 1];

	if (!item) {
		notFound();
	}

	return item.category === "CategoryWebsite" ? (
		<WebsitePortfolioItemLayout el={item} locale={locale} />
	) : (
		<PhotographyPortfolioItemLayout el={item} locale={locale} />
	);
}
