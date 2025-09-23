import { IoMdRocket } from "react-icons/io";
import SectionTitle from "../ui/SectionTitle";
import {
	FiUser,
	FiFileText,
	FiLayout,
	FiCode,
	FiCheckCircle,
} from "react-icons/fi";

const steps = [
	{
		title: "Konsultacja",
		desc: "Poznajemy Twoje potrzeby i cele.",
		icon: <FiUser />,
	},
	{
		title: "Planowanie",
		desc: "Tworzymy plan projektu i strukturę strony.",
		icon: <FiFileText />,
	},
	{
		title: "Projektowanie",
		desc: "Makiety i prototypy UI/UX.",
		icon: <FiLayout />,
	},
	{
		title: "Development",
		desc: "Tworzenie strony i integracje technologiczne.",
		icon: <FiCode />,
	},
	{
		title: "Testy",
		desc: "Optymalizacja, responsywność i poprawki.",
		icon: <FiCheckCircle />,
	},
	{
		title: "Wdrożenie",
		desc: "Publikacja strony i konfiguracja hostingu.",
		icon: <IoMdRocket />,
	},
];

function AbtMeHowIWork() {
	return (
		<section className='py-12'>
			<SectionTitle>How I Work</SectionTitle>
			<div className='grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3'>
				{steps.map((step, index) => (
					<div
						key={index}
						className='flex flex-col items-center text-center bg-white/5 backdrop-blur-sm border rounded-xl p-4 hover:scale-[1.03] transition-transform'>
						<div className='mb-2 text-3xl'>{step.icon}</div>
						<h3 className='mb-1 font-semibold'>{step.title}</h3>
						<p className='text-sm text-gray-300'>{step.desc}</p>
					</div>
				))}
			</div>
		</section>
	);
}

export default AbtMeHowIWork;
