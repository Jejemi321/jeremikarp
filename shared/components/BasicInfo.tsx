import { blankJpg, socialMedia } from "@/shared/constant/const";
import Image from "next/image";
import SectionTitle from "./ui/SectionTitle";
import { useTranslations } from "next-intl";

function BasicInfo() {
	const tAboutMe = useTranslations("aboutMe");
	const tSection = useTranslations("sectionTitle");

	return (
		<>
			<SectionTitle>{tSection("BasicInfo")}</SectionTitle>
			<div className='flex flex-col items-center gap-8 px-6 lg:flex-row lg:items-start xl:justify-center lg:gap-12 lg:px-12 xl:px-20'>
				<Image
					src={blankJpg}
					alt=''
					className='w-56 h-auto rounded-4xl xl:w-72 lg:w-80'
					width={300}
					height={500}
				/>
				<div className='text-center lg:text-left'>
					<h1 className='text-3xl lg:text-4xl font-bold mb-2.5'>Jeremi Karp</h1>
					<h2 className='mb-5 text-xl lg:text-2xl opacity-90'>
						Frontend/React Developer
					</h2>
					<p className='max-w-xl mb-5 leading-7 text-justify'>
						{tAboutMe("desc")}
					</p>
					<div className='flex justify-center gap-5 lg:justify-start'>
						{socialMedia.map(el => (
							<a
								key={el.id}
								href={el.link}
								className='transitionAll hover:opacity-75'
								target='_blank'>
								<i className={`${el.icon} size-5 text-xl`} />
							</a>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default BasicInfo;
