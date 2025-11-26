import SectionTitle from "../ui/SectionTitle";
import TechIcon from "../TechIcon";
import { useTranslations } from "next-intl";
import { TrainingArray } from "@/shared/constant/data";
import AnimatedCard from "../AnimatedCard";

function CertificationsResume() {
	const tMonth = useTranslations("months");
	const tSection = useTranslations("sectionTitle");
	const tTrainings = useTranslations("Trainings");

	return (
		<section className='py-12'>
			<SectionTitle>{tSection("Trainings")}</SectionTitle>
			<div className='grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3'>
				{[...TrainingArray].reverse().map((el, i) => (
					<AnimatedCard
						resume={true}
						id={el.id}
						key={el.id}
						index={i}
						icon={
							el.iconId ? (
								<TechIcon id={el.iconId} />
							) : (
								<i className={`${el.iconClass} text-2xl`} />
							)
						}
						title={tTrainings(el.id.toString())}
						subTitle={`${tMonth(el.month)}, ${el.year}`}
					/>
				))}
			</div>
		</section>
	);
}

export default CertificationsResume;
