import { PortfolioItems } from "@/shared/constant/const";
import Link from "next/link";
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

	return (
		<div>
			<Link href={`/${locale}/portfolio`}>{"<--"}</Link>
			<h1>{item.title}</h1>
			<p>{item.description}</p>
		</div>
	);
}
