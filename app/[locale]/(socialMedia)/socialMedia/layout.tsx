import ChangeLanguage from "@/shared/components/ChangeLanguage";
import { avatar } from "@/shared/constant/const";
import Image from "next/image";
import React from "react";

export default function SocialMediaLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='min-h-screen text-white bg-linear-to-b from-zinc-900 to-black'>
			<div className='max-w-2xl px-6 py-12 mx-auto'>
				<div className='flex justify-end'>
					<ChangeLanguage />
				</div>
				<header className='flex flex-col items-center mb-5 text-center'>
					<div className='w-24 h-24 mb-4 overflow-hidden border-2 rounded-full bg-zinc-800 border-zinc-700'>
						<div className='flex items-center justify-center w-full h-full text-zinc-500'>
							<Image src={avatar} alt='' width={200} height={200} />
						</div>
					</div>
					<h1 className='text-xl font-bold'>Jeremi Karp</h1>
					<p className='text-sm text-zinc-400'>Portfolio & Social Media</p>
					<div className='flex gap-2.5 mt-1'>
						<a
							className='transition-all duration-300 ease-in-out hover:text-zinc-400'
							href='https://www.jeremikarp.com/'
							target='_blank'
							rel='noopener noreferrer'>
							<i className='fi fi-rs-globe'></i>
						</a>
						<a
							className='transition-all duration-300 ease-in-out hover:text-zinc-400'
							href='https://www.instagram.com/jeremikarp/'
							target='_blank'
							rel='noopener noreferrer'>
							<i className='fi fi-brands-instagram'></i>
						</a>
						{/* <a
							href='http://'
							target='_blank'
							rel='noopener noreferrer'
							className='transition-all duration-300 ease-in-out hover:text-zinc-400'>
							<i className='fi fi-brands-tik-tok'></i>
						</a> */}
					</div>
				</header>

				<main>{children}</main>

				<footer className='mt-5 text-xs text-center text-zinc-500'>
					&copy;{new Date().getFullYear()} Jeremi Karp
				</footer>
			</div>
		</div>
	);
}
