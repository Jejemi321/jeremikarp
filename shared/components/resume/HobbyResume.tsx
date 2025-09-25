import { Hobby } from "@/shared/constant/const";
import SectionTitle from "../ui/SectionTitle";
import { useTranslations } from "next-intl";

function HobbyResume() {
	const date = new Date();
	const tH = useTranslations("Hobby");
	return (
		<>
			<SectionTitle>Hobby</SectionTitle>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-2.5'>
				{Hobby.map(el => (
					<div
						className='flex justify-between border px-2.5 py-2 rounded-xl'
						key={el.id}>
						<div className='flex items-center gap-x-1'>
							<i className={`${el.iconClass} text-xl size-5`}></i>
							<p className=''>{tH(el.name)}</p>
						</div>
						<p className=''>
							{date.getFullYear() - el.years.getFullYear()} years
						</p>
					</div>
				))}
			</div>
		</>
	);
}

export default HobbyResume;
