import { TrainingArray } from "@/shared/constant/const";
import SectionTitle from "../ui/SectionTitle";
import TechIcon from "../TechIcon";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

function CertificationsResume() {
	const tMonth = useTranslations("months");
	const tSection = useTranslations("sectionTitle");
	const tTrainings = useTranslations("Trainings");
	return (
		<section className='py-12'>
			<SectionTitle>{tSection("Trainings")}</SectionTitle>
			<div className='grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3'>
				{[...TrainingArray].reverse().map((el, i) => (
					<motion.a
						key={el.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.3, delay: i * 0.05 }}
						className='flex items-center justify-between p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-sm
                       hover:shadow-md hover:scale-[1.03] transition-transform'>
						<div className='flex items-center w-2/3 gap-x-3'>
							{el.iconId ? (
								<TechIcon id={el.iconId} />
							) : (
								<i className={`${el.iconClass} text-2xl`} />
							)}
							<p className='font-medium'>{tTrainings(el.id.toString())}</p>
						</div>
						<div className='w-1/3 text-sm text-gray-300 text-end'>
							{tMonth(el.month)}, {el.year}
						</div>
					</motion.a>
				))}
			</div>
		</section>
	);
}

export default CertificationsResume;
