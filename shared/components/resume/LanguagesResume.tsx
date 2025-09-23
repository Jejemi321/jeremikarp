import { Language } from "@/shared/constant/const";
import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";

function LanguagesResume() {
	return (
		<>
			<SectionTitle>Languages</SectionTitle>
			<div className='grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2'>
				{Language.map(el => (
					<div
						key={el.id}
						className='flex items-center justify-between px-3 py-1.5 transition shadow-sm border rounded-xl hover:shadow-md'>
						<div className='flex gap-x-2.5 items-center'>
							<Image
								alt={el.name}
								width={44}
								height={32}
								className=''
								src={`https://flagsapi.com/${el.short}/flat/64.png`}
							/>

							<p className='text-lg font-medium'>{el.name}</p>
						</div>
						<div className='flex gap-x-0.5'>
							<p>Level:</p>
							<p className=''>{el.level}</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default LanguagesResume;
