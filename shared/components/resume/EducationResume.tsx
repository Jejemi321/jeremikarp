import { SchoolsArray, TrainingArray } from "@/shared/constant/const";
import SectionTitle from "../ui/SectionTitle";

function EducationResume() {
	return (
		<>
			<SectionTitle>Education</SectionTitle>
			<div className='flex justify-center'>
				{/* Schools */}
				<div>
					<h2 className='mb-6 text-xl font-bold text-center'>Schools</h2>
					<ul className='relative pr-6 space-y-6'>
						{SchoolsArray.reverse().map((item, index) => (
							<li key={index}>
								<div className='p-4 transition shadow rounded-xl bg-white/5 hover:shadow-md'>
									<p className='text-sm text-gray-500'>
										{item.from} – {item.to}
									</p>
									<a
										target='_blank'
										href={item.web}
										className='text-lg font-semibold hover:opacity-75'>
										{item.name}
									</a>
									<p className='text-gray-700 dark:text-gray-300'>
										{item.level}
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
