import { TechStackArray } from "@/shared/constant/TechStack";
import TechIcon from "../TechIcon";
import SectionTitle from "../ui/SectionTitle";
import { useTranslations } from "next-intl";
import Link from "next/link";

function TechSkillsResume() {
	const tLevel = useTranslations("levels");

	const sortedTechStack = [...TechStackArray]
		.sort((a, b) => a.since.getFullYear() - b.since.getFullYear())
		.slice(0, 20);

	return (
		<>
			<div className='flex items-center justify-between'>
				<SectionTitle>Tech Skills</SectionTitle>
				<Link href={"/techStack"}>TechStack</Link>
			</div>
			<div className='grid grid-cols-4 gap-2.5'>
				{sortedTechStack.map(el => (
					<div key={el.id} className='px-5 py-2.5 rounded-xl border'>
						<div className='flex items-center justify-between'>
							<TechIcon id={el.id} />
							<p className='text-sm'>
								{"Od "}
								{el.since.getFullYear()}
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
