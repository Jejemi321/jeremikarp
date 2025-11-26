import { motion } from "framer-motion";
function PortfolioTitleElement({
	desc,
	title,
}: {
	desc: string;
	title: string;
}) {
	const textVariants = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};
	return (
		<motion.div
			variants={textVariants}
			initial='hidden'
			animate='show'
			className='mb-6 space-y-4'>
			<h2 className='text-4xl font-bold leading-none text-center uppercase lg:text-left sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl'>
				{title}
			</h2>
			<p className='max-w-2xl mx-auto text-sm leading-relaxed text-center lg:mx-0 sm:text-base text-muted-foreground lg:text-left opacity-90'>
				{desc}
			</p>
		</motion.div>
	);
}

export default PortfolioTitleElement;
