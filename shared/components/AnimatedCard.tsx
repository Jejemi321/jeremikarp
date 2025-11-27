"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

interface AnimatedCardProps {
	id: number | string;
	icon?: React.ReactNode;
	title: string;
	subTitle?: React.ReactNode;
	description?: React.ReactNode;
	className?: string;
	index?: number;
	resume?: boolean;
	variants?: Variants;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
	id,
	resume,
	icon,
	title,
	subTitle,
	description,
	className = "",
	index = 0,
	variants,
}) => {
	return (
		<motion.div
			key={id}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.3, delay: index * 0.05 }}
			variants={variants}
			className={`px-4 py-3 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm shadow-sm hover:shadow-md hover:scale-[1.02] transition-transform cursor-default ${className}`}>
			<div className='flex items-center justify-between mb-2'>
				{icon && <div>{icon}</div>}
				{subTitle && <span className='text-sm font-medium'>{subTitle}</span>}
			</div>
			{resume && <p className='font-medium'>{title}</p>}
			{description && (
				<p className='mt-1 text-sm leading-snug text-gray-600 dark:text-gray-300'>
					{description}
				</p>
			)}
		</motion.div>
	);
};

export default AnimatedCard;
