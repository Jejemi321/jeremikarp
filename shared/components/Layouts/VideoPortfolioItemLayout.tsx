"use client";
import { VideoPortfolioItemsType } from "@/shared/constant/VideoPortfolioItems";
import { useTranslations } from "next-intl";
import VimeoPlayer from "../VimeoPlayer";
import PortfolioTitleElement from "../ui/PortfolioTitleElement";

function VideoPortfolioItemLayout({ el }: { el: VideoPortfolioItemsType }) {
	const tvP = useTranslations("videoPortfolio");
	const tvPP = useTranslations("videoPortfolioProjects");

	const credits = [
		{ key: "DirectedBy", value: el.directedBy },
		{ key: "Dop", value: el.dop },
		{ key: "EditedBy", value: el.editBy },
		{ key: "CoverBy", value: el.coverBy },
		{ key: "Artist", value: el.artist },
		{ key: "Status", value: tvP(el.status) },
		{ key: "Date", value: el.date.split("-").reverse().join(".") },
		{ key: "Duration", value: el.duration },
		{ key: "Location", value: el.location },
		{ key: "cameraUsed", value: el.cameraUsed },
		{ key: "lensesUsed", value: el.lensesUsed },
		{ key: "videoCategory", value: tvP(el.videoCategory) },
	];
	return (
		<section className='space-y-10'>
			<PortfolioTitleElement
				title={tvPP(el.title)}
				desc={tvPP(el.description)}
			/>
			<VimeoPlayer videoId={el.vimeoId} title={el.title} />
			<div className='grid items-start text-sm text-center lg:text-start sm:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-6'>
				{credits.map(
					item =>
						item.value && (
							<CreditsElement
								key={item.key}
								label={tvP(item.key)}
								value={item.value}
							/>
						)
				)}
			</div>
		</section>
	);
}

function CreditsElement({
	label,
	value,
}: {
	label: string;
	value: string | string[];
}) {
	return (
		<div className='space-y-1'>
			<p className='text-xs tracking-wide uppercase sm:text-sm'>{label}</p>
			<p className='text-base font-semibold capitalize break-words sm:text-lg'>
				{Array.isArray(value) ? value.join(", ") : value}
			</p>
		</div>
	);
}

export default VideoPortfolioItemLayout;
