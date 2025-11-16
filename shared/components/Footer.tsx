import Link from "next/link";
import { useTranslations } from "next-intl";
import { SocialMedia } from "../constant/const";

export default function Footer() {
	const t = useTranslations("nav");

	return (
		<>
			<footer className='flex flex-col items-center justify-around gap-2 px-2 py-1 md:gap-0 md:flex-row'>
				{/* Social media */}
				<div className='flex justify-center w-full md:w-1/3'>
					<div className='flex md:w-1/3 justify-evenly'>
						{SocialMedia.map(el => (
							<Link
								target='_blank'
								href={el.link}
								key={el.name}
								className='transition-opacity duration-75 cursor-pointer hover:opacity-60'>
								<i className={`w-4 h-4 ${el.icon} mx-1`} />
							</Link>
						))}
					</div>
				</div>

				{/* Title */}
				<div className='text-base text-center md:w-1/3 sm:text-xl md:text-2xl'>
					Jeremi Karp
				</div>

				{/* Navigation links */}
				<div className='flex justify-center text-center md:w-1/3'>
					<p className='text-xs opacity-75 sm:text-sm'>
						&copy; {new Date().getFullYear()} Jeremi Karp. {t("RightsReserved")}
					</p>
				</div>
			</footer>
		</>
	);
}
