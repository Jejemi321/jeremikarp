import Link from "next/link";
import { PortfolioItems } from "../constant/PortfolioItems";
import PortfolioItem from "./PortfolioItem";
import { useTranslations } from "next-intl";

function PortfolioHome() {
	const t = useTranslations("btns");
	return (
		<>
			<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
				{PortfolioItems.sort(
					(a, b) =>
						new Date(b.date).getFullYear() - new Date(a.date).getFullYear()
				)
					.slice(0, 3)
					.map(el => (
						<PortfolioItem el={el} key={el.id} />
					))}
			</div>
			<div className='flex justify-center '>
				<Link
					href={"portfolio"}
					className='px-2.5 py-1.5 dark:bg-dark-foreground dark:text-dark-background bg-foreground text-background hover:opacity-75 transitionAll mt-2.5 rounded-3xl'>
					{t("ShowMore")}
				</Link>
			</div>
		</>
	);
}

export default PortfolioHome;
