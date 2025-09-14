"use client";
import { contactInfo, socialMedia } from "@/shared/constant/const";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ResumeSectionTitle from "../ui/ResumeSectionTitle";

function ContactInfoResume() {
	const [Show, setShow] = useState<boolean>(false);

	return (
		<>
			<div className='flex justify-between'>
				<ResumeSectionTitle>Contact Info</ResumeSectionTitle>
				<p className='cursor-pointer' onClick={() => setShow(!Show)}>
					{!Show ? "Show" : "Hide"}
				</p>
			</div>
			<div className='grid grid-cols-3 gap-4'>
				{contactInfo.map(el => (
					<a
						key={el.id}
						href={`${el.typeHref}${el.value}`}
						target='_blank'
						className='flex flex-col items-center justify-center space-x-2 text-gray-700 transition hover:text-blue-600'>
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

				{socialMedia.map(el => (
					<a
						key={el.id}
						href={el.link}
						target='_blank'
						className='flex flex-col items-center justify-center space-x-2 text-gray-700 transition hover:text-blue-600'>
						<i className={`${el.icon} text-lg`}></i>
						<AnimatePresence mode='wait'>
							<motion.p
								key={Show ? el.link : el.name}
								initial={{ opacity: 0, y: 5 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -5 }}
								transition={{ duration: 0.25 }}>
								{Show ? el.link : el.name}
							</motion.p>
						</AnimatePresence>
					</a>
				))}
			</div>
		</>
	);
}

export default ContactInfoResume;
