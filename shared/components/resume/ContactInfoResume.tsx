"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import { useTranslations } from "next-intl";
import { ContactInfo, SocialMedia } from "@/shared/constant/data";

function ContactInfoResume() {
	const [Show, setShow] = useState<boolean>(false);
	const tSection = useTranslations("sectionTitle");
	return (
		<>
			<div className='flex justify-between'>
				<SectionTitle>{tSection("ContactInfo")}</SectionTitle>
				<p
					className='cursor-pointer'
					onClick={() => {
						setShow(!Show);
					}}>
					{!Show ? "Show" : "Hide"}
				</p>
			</div>
			<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
				{ContactInfo.map(el => (
					<a
						key={el.id}
						href={`${el.typeHref}${el.value}`}
						target='_blank'
						className='flex flex-col items-center justify-center space-x-2 transition hover:opacity-75'>
						<i className={`${el.iconClass} text-lg`}></i>
						<AnimatePresence mode='wait'>
							<motion.p
								key={Show ? el.value : el.name}
								initial={{ opacity: 0, y: 5 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -5 }}
								transition={{ duration: 0.25 }}>
								{Show ? el.value : el.name}
							</motion.p>
						</AnimatePresence>
					</a>
				))}

				{SocialMedia.map(el => (
					<a
						key={el.id}
						href={el.link}
						target='_blank'
						className='flex flex-col items-center justify-center space-x-2 transition hover:opacity-75'>
						<i className={`${el.icon} text-lg`}></i>
						<AnimatePresence mode='wait'>
							<motion.p
								key={Show ? el.link : el.name}
								initial={{ opacity: 0, y: 5 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -5 }}
								transition={{ duration: 0.25 }}>
								{Show ? el.link.replace(/^https?:\/\/www./, "") : el.name}
							</motion.p>
						</AnimatePresence>
					</a>
				))}
			</div>
		</>
	);
}

export default ContactInfoResume;
