import { PortfolioItems } from "@/shared/constant/const";
import Link from "next/link";
import { notFound } from "next/navigation";
//TODO Layout
interface PortfolioItemPageProps {
	params: { id: string };
}

export default async function PortfolioItemPage({
	params,
}: PortfolioItemPageProps) {
	const item = PortfolioItems[Number(params.id) - 1];

	if (!item) {
		notFound();
	}

	return (
		<div>
			{/* TODO Change <-- to flaticon */}
			<Link href={"/portfolio"}>{"<--"}</Link>
			<h1>{item.title}</h1>
			<p>{item.description}</p>
		</div>
	);
}
