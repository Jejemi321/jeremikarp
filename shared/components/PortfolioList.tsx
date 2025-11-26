import Link from "next/link";
import PortfolioItem from "./PortfolioItem";
import SectionTitle from "./ui/SectionTitle";
import { PortfolioItems as items } from "@/shared/constant/PortfolioItems";
import { useTranslations } from "next-intl";

interface PortfolioListProps {
	limit?: number; // ile elementów wyświetlić
	filterCategory?: string; // np. "CategoryWebsite"
	sortByDate?: boolean; // jeśli true, sortuje malejąco po dacie
	showTitle?: boolean; // czy pokazać nagłówek sekcji
}

const PortfolioList: React.FC<PortfolioListProps> = ({
	limit = 3,
	filterCategory,
	sortByDate = false,
	showTitle = true,
}) => {
	const t = useTranslations("btns");
	const tSection = useTranslations("sectionTitle");

	let displayedItems = [...items];

	if (filterCategory) {
		displayedItems = displayedItems.filter(
			el => el.category === filterCategory
		);
	}

	if (sortByDate) {
		displayedItems.sort(
			(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
		);
	}

	displayedItems = displayedItems.slice(0, limit);

	return (
		<>
			{showTitle && <SectionTitle>{tSection("Projects")}</SectionTitle>}
			<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
				{displayedItems.map(el => (
					<PortfolioItem key={el.id} el={el} />
				))}
			</div>
			<div className='flex justify-center'>
				<Link
					href='/portfolio'
					className='px-2.5 py-1.5 dark:bg-dark-foreground dark:text-dark-background bg-foreground text-background hover:opacity-75 transitionAll mt-2.5 rounded-3xl'>
					{t("ShowMore")}
				</Link>
			</div>
		</>
	);
};

export default PortfolioList;
