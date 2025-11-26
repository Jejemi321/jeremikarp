import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import TechIcon from "./TechIcon";
import { TechStackBase } from "../constant/TechStack";

function ModalTechStack({
	selectedTech,
	setSelectedTech,
}: {
	selectedTech: TechStackBase | null;
	setSelectedTech: React.Dispatch<React.SetStateAction<TechStackBase | null>>;
}) {
	const tDesc = useTranslations("techDesc");
	const tLevels = useTranslations("levels");
	const tLanguages = useTranslations("Languages");
	return (
		<AnimatePresence>
			{selectedTech && (
				<motion.div
					key='modal'
					className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={() => setSelectedTech(null)}>
					<motion.div
						className='relative w-11/12 max-w-md p-6 bg-white rounded-lg dark:bg-gray-800'
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.8, opacity: 0 }}
						transition={{ duration: 0.3, ease: "easeOut" }}
						onClick={e => e.stopPropagation()}>
						<button
							onClick={() => setSelectedTech(null)}
							className='absolute text-gray-500 top-2 right-2 hover:text-gray-700 dark:hover:text-white'>
							✕
						</button>
						<div className='flex flex-col items-center space-y-4'>
							<TechIcon id={selectedTech.id} />
							<p>
								{tLanguages("Level")}: {tLevels(selectedTech.knowledge)}
							</p>
							<p className='text-center text-gray-700 dark:text-gray-300'>
								{tDesc(selectedTech.id.toString())}
							</p>
							{selectedTech.docsUrl && (
								<a
									href={selectedTech.docsUrl}
									target='_blank'
									className='text-blue-500 underline'>
									{tDesc("Documentation")}
								</a>
							)}
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default ModalTechStack;
