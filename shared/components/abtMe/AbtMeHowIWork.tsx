import { IoMdRocket } from "react-icons/io";
import SectionTitle from "../ui/SectionTitle";
import {
	FiUser,
	FiFileText,
	FiLayout,
	FiCode,
	FiCheckCircle,
} from "react-icons/fi";
import { useTranslations } from "next-intl";

const steps = [
	{
		title: "ConsultationTitle",
		desc: "ConsultationDesc",
		icon: <FiUser />,
	},
	{
		title: "PlanningTitle",
		desc: "PlanningDesc",
		icon: <FiFileText />,
	},
	{
		title: "DesignTitle",
		desc: "DesignDesc",
		icon: <FiLayout />,
	},
	{
		title: "DevelopmentTitle",
		desc: "DevelopmentDesc",
		icon: <FiCode />,
	},
	{
		title: "TestingTitle",
		desc: "TestingDesc",
		icon: <FiCheckCircle />,
	},
	{
		title: "DeploymentTitle",
		desc: "DeploymentDesc",
		icon: <IoMdRocket />,
	},
];

function AbtMeHowIWork() {
	const tS = useTranslations("sectionTitle");
	const tSteps = useTranslations("steps");
	return (
		<section className='py-12'>
			<SectionTitle>{tS("HowIWork")}</SectionTitle>
			<div className='grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3'>
				{steps.map((step, index) => (
					<div
						key={index}
						className='flex flex-col items-center text-center bg-white/5 backdrop-blur-sm border rounded-xl p-4 hover:scale-[1.03] transition-transform'>
						<div className='mb-2 text-3xl'>{step.icon}</div>
						<h3 className='mb-1 font-semibold'>{tSteps(step.title)}</h3>
						<p className='text-sm text-gray-300'>{tSteps(step.desc)}</p>
					</div>
				))}
			</div>
		</section>
	);
}

export default AbtMeHowIWork;
