"use client";
import { FaqArray } from "@/shared/constant/const";
import SectionTitle from "../ui/SectionTitle";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

function AbtMeFaq() {
	const [activeId, setActiveId] = useState<number | undefined>();
	const toggleFaq = (id: number) => {
		setActiveId(prev => (prev === id ? undefined : id));
	};
	const t = useTranslations("faq");
	return (
		<>
			<SectionTitle>FAQ</SectionTitle>
			<div className='flex flex-col items-center gap-y-3 mb-2.5'>
				{FaqArray.map(el => (
					<div
						key={el.id}
						className='px-4 py-3 transition border rounded-lg shadow-sm sm:w-3/4 xl:w-1/2 bg-white/5 backdrop-blur-sm hover:cursor-pointer hover:bg-white/10'
						onClick={() => toggleFaq(el.id)}>
						<div className='flex items-center justify-between'>
							<p className='font-medium text-start'>{t(el.question)}</p>
							<motion.div
								animate={{ rotate: activeId === el.id ? 180 : 0 }}
								transition={{ duration: 0.3 }}>
								<i className='fi fi-rr-angle-small-down'></i>
							</motion.div>
						</div>
						<AnimatePresence initial={false}>
							{activeId === el.id && (
								<motion.div
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: "auto" }}
									exit={{ opacity: 0, height: 0 }}
									transition={{ duration: 0.3 }}
									className='mt-2.5 text-start text-sm text-gray-300'>
									{t(el.answer)}
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				))}
			</div>
		</>
	);
}

export default AbtMeFaq;
