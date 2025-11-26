"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

interface CardResumeProps {
	id: number | string;
	icon?: React.ReactNode; // Ikona lub obrazek po lewej
	imageSrc?: string; // Źródło obrazka (np. flaga)
	title: string; // Główna nazwa
	subTitle?: string; // Dodatkowy tekst po prawej
	extraContent?: React.ReactNode; // Dodatkowa zawartość np. pasek wiedzy
	className?: string; // Dodatkowe klasy Tailwind
	variants?: Variants; // Animacje Framer Motion
}

const CardResume: React.FC<CardResumeProps> = ({
	id,
	icon,
	imageSrc,
	title,
	subTitle,
	extraContent,
	className = "",
	variants,
}) => {
	return (
		<motion.div
			key={id}
			variants={variants}
			className={`flex items-center justify-between px-4 py-2 min-h-[60px] border rounded-xl shadow-sm hover:shadow-md transition-all ${className}`}>
			<div className='flex items-center gap-2'>
				{icon && icon}
				{imageSrc && (
					<Image
						src={imageSrc}
						alt={title}
						width={44}
						height={32}
						className='object-cover rounded-sm'
					/>
				)}
				{!icon && <p className='text-lg font-medium'>{title}</p>}
			</div>

			<div className='flex items-center gap-1'>
				{subTitle && <p className='text-sm'>{subTitle}</p>}
				{extraContent && extraContent}
			</div>
		</motion.div>
	);
};

export default CardResume;
