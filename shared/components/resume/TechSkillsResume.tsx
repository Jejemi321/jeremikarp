import { TechStackArray } from "@/shared/constant/TechStack";
import TechIcon from "../TechIcon";
import SectionTitle from "../ui/SectionTitle";
import Link from "next/link";
import { useTranslations } from "next-intl";

function TechSkillsResume() {
	const sortedTechStack = [...TechStackArray]
		.sort((a, b) => a.since.getFullYear() - b.since.getFullYear())
		.slice(0, 20);
	const tTime = useTranslations("time");
	const tSection = useTranslations("sectionTitle");
	return (
		<>
			<div className='flex items-center justify-between'>
				<SectionTitle>{tSection("TechSkills")}</SectionTitle>
				<Link href={"/techStack"} className='hover:opacity-75 transitionAll'>
					TechStack
				</Link>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5'>
				{sortedTechStack.map(el => (
					<div key={el.id} className='px-5 py-2.5 rounded-xl border'>
						<div className='flex items-center justify-between'>
							<TechIcon id={el.id} />
							<p className='text-sm'>
								{tTime("since")} {el.since.getFullYear()}
							</p>
						</div>
						<div className='border rounded-2xl h-2.5 mt-2.5 mb-1'>
							<div
								className={`${el.KnowledgeWidth} h-full bg-foreground dark:bg-dark-foreground transitionAll`}></div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default TechSkillsResume;
