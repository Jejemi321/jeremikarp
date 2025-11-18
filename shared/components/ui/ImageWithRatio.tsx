"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { imgArrayPhoto } from "@/shared/types";

function ImageWithRatio({ img }: { img: imgArrayPhoto }) {
	const [isLandscape, setIsLandscape] = useState(false);

	useEffect(() => {
		const imgElement = new Image();
		imgElement.src = img.src;
		imgElement.onload = () => {
			setIsLandscape(imgElement.naturalWidth > imgElement.naturalHeight);
		};
	}, [img.src]);

	return (
		<motion.div
			className={`relative overflow-hidden rounded-lg ${
				isLandscape ? "sm:col-span-2" : "sm:col-span-1"
			}`}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4 }}
			viewport={{ once: true, amount: 0.2 }}>
			<img
				src={img.src}
				alt=''
				className='object-cover w-full h-full transition-transform duration-500 rounded-lg group-hover:scale-105'
			/>

			{/* Overlay */}
			{/* <div className='absolute inset-0 flex items-center justify-center text-lg font-medium text-white transition-opacity duration-300 opacity-0 bg-black/60 hover:opacity-100'>
				<div className='p-2 text-center '>
					<p>{img?.title?.toUpperCase() || "Tytuł zdjęcia"}</p>
					<hr />
					<div className='mt-1 space-y-1 text-sm opacity-80'>
						<p>Date: {img?.date?.toUpperCase() || "Tytuł zdjęcia"}</p>
						<p>
							Model:{" "}
							{img?.model && img.model.length > 0
								? img.model.map(m => m.name).join(", ")
								: "Nieznany"}
						</p>

						<p>
							ISO: {img?.iso || "-"} | f/{img?.aperture || "-"} |{" "}
							{img?.shutterSpeed || "-"}
						</p>
					</div>
				</div>
			</div> */}
		</motion.div>
	);
}

export default ImageWithRatio;
