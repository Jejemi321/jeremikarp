import { blankJpg } from "@/shared/constant/const";
import Image from "next/image";
import ResumeSectionTitle from "../ui/ResumeSectionTitle";

function BasicInfoResume() {
	return (
		<>
			<ResumeSectionTitle>Basic Info</ResumeSectionTitle>
			<div className='flex items-center gap-x-5'>
				<div className=''>
					<Image
						src={blankJpg}
						alt=''
						className='rounded-full'
						width={300}
						height={300}
					/>
				</div>
				<div className='w-1/2'>
					<h1 className='text-4xl'>Jeremi Karp</h1>
					<h2 className='text-2xl opacity-90'>Frontend/React Developer</h2>
					<p className=''>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
						voluptatem fuga a, labore quidem aperiam recusandae adipisci vel
						earum rem quod officia placeat, excepturi, deleniti similique
						cupiditate quo doloribus! Vero!
					</p>
				</div>
			</div>
		</>
	);
}

export default BasicInfoResume;
