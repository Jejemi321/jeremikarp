"use client";
import { useEffect, useState } from "react";

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
		<img
			src={src}
			alt=''
			className={`object-cover w-full h-full ${
				isLandscape ? "col-span-2" : "col-span-1"
			}`}
		/>
	);
}

export default ImageWithRatio;
