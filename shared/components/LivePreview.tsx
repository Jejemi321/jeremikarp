"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WebPortfolioItemType } from "../constant/WebPortfolioItems";
import { useTranslations } from "next-intl";

function LivePreview({ el }: { el: WebPortfolioItemType }) {
	const [loading, setLoading] = useState(true);
	const t = useTranslations("portfolioWeb");
	return (
		<div className='flex flex-col flex-1 w-full lg:w-3/4'>
			{/* Ostrzeżenie */}
			<div className='flex items-center justify-between p-3 mb-2 text-sm text-yellow-800 bg-yellow-100 rounded-lg dark:bg-yellow-900 dark:text-yellow-200'>
				<p>{t("LivePreviewWarning")}</p>
				{el.url && (
					<a
						href={el.url}
						target='_blank'
						rel='noopener noreferrer'
						className='px-3 py-1 ml-4 text-xs font-medium text-white transition bg-blue-600 rounded-lg hover:bg-blue-700'>
						{t("LivePreviewBtnWarning")}
					</a>
				)}
			</div>

			{/* Live Preview */}
			<div className='relative flex-1 overflow-x-hidden overflow-y-auto rounded-lg shadow-md'>
				<AnimatePresence mode='wait'>
					<motion.div
						key='preview'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}
						className='relative w-full h-full'>
						{loading && (
							<div className='absolute inset-0 z-10 flex items-center justify-center bg-white dark:bg-gray-900'>
								<div className='w-12 h-12 border-t-4 border-blue-600 rounded-full animate-spin'></div>
							</div>
						)}
						<iframe
							src={el.url}
							title='Live preview'
							className='w-full h-[50vh] lg:h-full rounded-lg overflow-x-hidden'
							sandbox='allow-scripts allow-same-origin allow-forms'
							onLoad={() => setLoading(false)}
						/>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
}

export default LivePreview;
