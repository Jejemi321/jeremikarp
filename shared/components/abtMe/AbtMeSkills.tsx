import SectionTitle from "../ui/SectionTitle";
import TechIcon from "../TechIcon";
import { useTranslations } from "next-intl";
import { TechStackArray } from "@/shared/constant/TechStack";
import AnimatedCard from "../AnimatedCard";

function AbtMeSkills() {
	const tLevels = useTranslations("levels");
	const tDesc = useTranslations("techDesc");
	const tSection = useTranslations("sectionTitle");

	return (
		<>
			<div className='flex items-center justify-between'>
				<SectionTitle>{tSection("MostImportantSkills")}</SectionTitle>
			</div>
			<div className='grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2 lg:grid-cols-3'>
				{TechStackArray.filter(a => a?.star).map((el, i) => (
					<AnimatedCard
						id={el.id}
						key={el.id}
						index={i}
						icon={<TechIcon id={el.id} />}
						title={el.name}
						description={tDesc(el.id.toString())}
					/>
				))}
			</div>
		</>
	);
}

export default AbtMeSkills;
