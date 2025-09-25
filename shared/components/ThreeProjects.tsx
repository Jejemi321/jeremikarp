import Link from "next/link";
import PortfolioItem from "./PortfolioItem";
import { PortfolioItems } from "@/shared/constant/PortfolioItems";
import SectionTitle from "./ui/SectionTitle";
import { useTranslations } from "next-intl";

function ThreeProjects() {
	const t = useTranslations("btns");
	const tSection = useTranslations("sectionTitle");

	return (
		<>
			<SectionTitle>{tSection("Projects")}</SectionTitle>
			<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
				{PortfolioItems.filter(el => el.category == "CategoryWebsite")
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

export default ThreeProjects;
