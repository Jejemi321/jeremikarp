import { SchoolsArray } from "@/shared/constant/const";
import SectionTitle from "../ui/SectionTitle";
import { useTranslations } from "next-intl";

function EducationResume() {
	const tSection = useTranslations("sectionTitle");
	const tEducation = useTranslations("Education");
	return (
		<>
			<SectionTitle>{tSection("Education")}</SectionTitle>
			<div className='flex justify-center'>
				{/* Schools */}
				<div>
					<h2 className='mb-6 text-xl font-bold text-center'>Schools</h2>
					<ul className='relative space-y-6 md:pr-6'>
						{[...SchoolsArray].reverse().map((item, index) => (
							<li key={index}>
								<div className='p-4 transition shadow rounded-xl bg-white/5 hover:shadow-md'>
									<p className='text-sm text-gray-500'>
										{item.from} {"–"} {item.to}
									</p>
									<a
										target='_blank'
										href={item.web}
										className='text-lg font-semibold hover:opacity-75'>
										{tEducation(item.id.toString())}
									</a>
									<p className='text-gray-700 dark:text-gray-300'>
										{tEducation(item.level)}
									</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}

export default EducationResume;
