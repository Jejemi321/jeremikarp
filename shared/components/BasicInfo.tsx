import { blankJpg, socialMedia } from "@/shared/constant/const";
import Image from "next/image";
import SectionTitle from "./ui/SectionTitle";

function BasicInfo() {
	return (
		<>
			<SectionTitle>Basic Info</SectionTitle>
			<div className='flex px-30 gap-x-10'>
				<Image
					src={blankJpg}
					alt=''
					className='rounded-4xl'
					width={300}
					height={500}
				/>
				<div className=''>
					<h1 className='text-4xl mb-2.5'>Jeremi Karp</h1>
					<h2 className='mb-5 text-2xl opacity-90'>Frontend/React Developer</h2>
					<p className='mb-5 leading-7'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
						voluptatem fuga a, labore quidem aperiam recusandae adipisci vel
						earum rem quod officia placeat, excepturi, deleniti similique
						cupiditate quo doloribus! Vero! Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Qui voluptatem fuga a, labore quidem
						aperiam recusandae adipisci vel earum rem quod officia placeat,
						excepturi, deleniti similique cupiditate quo doloribus! Vero!
					</p>
					<div className='flex gap-x-5'>
						{socialMedia.map(el => (
							<a
								key={el.id}
								href={el.link}
								className='hover:opacity-75 transitionAll'
								target='_blank'>
								<i className={el.icon} />
							</a>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default BasicInfo;
