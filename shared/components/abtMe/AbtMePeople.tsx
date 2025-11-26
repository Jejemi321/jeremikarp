import SectionTitle from "../ui/SectionTitle";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { WorkPeopleArray } from "@/shared/constant/data";

function AbtMePeople() {
	const tSection = useTranslations("sectionTitle");

	return (
		<>
			<SectionTitle>{tSection("CoWorkers")}</SectionTitle>
			<div className='flex justify-center'>
				{WorkPeopleArray.map(el => (
					<div
						className='flex flex-col items-center justify-center gap-y-0.5'
						key={el.id}>
						<Image
							width={200}
							height={200}
							src={el.img}
							alt=''
							className='rounded-full'
						/>
						<p className='mt-0.5 text-xl'>{el.name}</p>
						<span className='text-sm'>{el.role}</span>
					</div>
				))}
			</div>
		</>
	);
}

export default AbtMePeople;
