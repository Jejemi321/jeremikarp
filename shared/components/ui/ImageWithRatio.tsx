"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function ImageWithRatio({ src }: { src: string }) {
	const [isLandscape, setIsLandscape] = useState(false);

	useEffect(() => {
		const img = new Image();
		img.src = src;
		img.onload = () => {
			setIsLandscape(img.naturalWidth > img.naturalHeight);
		};
	}, [src]);

	return (
		<motion.img
			src={src}
			alt=''
			className={`object-cover w-full h-full rounded-lg ${
				isLandscape ? "col-span-2" : "col-span-1"
			}`}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4 }}
			viewport={{ once: true, amount: 0.2 }}
		/>
	);
}

export default ImageWithRatio;
