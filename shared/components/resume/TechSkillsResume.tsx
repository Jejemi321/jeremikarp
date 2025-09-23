import { TechStackArray } from "@/shared/constant/TechStack";
import TechIcon from "../TechIcon";
import SectionTitle from "../ui/SectionTitle";

function TechSkillsResume() {
	return (
		<>
			<div className='flex justify-between'>
				<SectionTitle>Tech Skills</SectionTitle>
				<select name='' id=''>
					<option value=''>abc</option>
					<option value=''>abc</option>
					<option value=''>abc</option>
					<option value=''>abc</option>
					<option value=''>abc</option>
				</select>
			</div>
			<div className='grid grid-cols-4 gap-2.5'>
				{TechStackArray.map(el => (
					<div key={el.id} className=' px-5 py-2.5 rounded-xl border'>
						<div className='flex justify-between'>
							<TechIcon id={el.id} />
							<p className=''>{el.knowledge}</p>
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
