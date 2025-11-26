// TODO://Layout// Miasto Lodz/Zakopane 2023/Roof/Solitude/Cracow/Fade/Ec1/Staircase/
"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { PhotoPortfolioItemsType } from "@/shared/constant/PhotoPortfolioItems";
import ImageWithRatio from "../ui/ImageWithRatio";
import PortfolioTitleElement from "../ui/PortfolioTitleElement";

function PhotographyPortfolioItemLayout({
	el,
}: {
	el: PhotoPortfolioItemsType;
}) {
	const t = useTranslations("photoPortfolioProjects");

	const containerVariants = {
		hidden: {},
		show: { transition: { staggerChildren: 0.1 } },
	};

	return (
		<motion.div
			className='mb-2.5'
			variants={containerVariants}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true, amount: 0.2 }}>
			<PortfolioTitleElement title={t(el.title)} desc={t(el.description)} />
			<div
				className={`grid grid-cols-1 gap-2 ${
					el.class ? el.class : "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
				} grid-flow-dense`}>
				{el.imgArray?.map((img, i) => (
					<ImageWithRatio key={i} img={img} />
				))}
			</div>
		</motion.div>
	);
}

export default PhotographyPortfolioItemLayout;
