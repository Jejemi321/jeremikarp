import { useState } from "react";

const VimeoPlayer = ({
	videoId,
	autoplay = true,
	title,
}: {
	videoId: string;
	autoplay?: boolean;
	title: string;
}) => {
	const [isLoading, setIsLoading] = useState(true); // stan ładowania
	const autoplayParam = autoplay ? 1 : 0;
	const videoTitle = title || `Vimeo video ${videoId}`;

	return (
		<div className='relative w-full pt-[56.25%]'>
			{isLoading && (
				<div className='absolute inset-0 flex items-center justify-center bg-gray-100'>
					{/* prosty spinner */}
					<div className='w-12 h-12 border-4 border-gray-300 rounded-full border-t-blue-500 animate-spin'></div>
				</div>
			)}
			<iframe
				src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&autoplay=${autoplayParam}`}
				className='absolute top-0 left-0 w-full h-full rounded-axl'
				frameBorder='0'
				allow='autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share'
				referrerPolicy='strict-origin-when-cross-origin'
				title={videoTitle}
				onLoad={() => setIsLoading(false)} // ukrywa loader po załadowaniu iframe
			/>
		</div>
	);
};

export default VimeoPlayer;
