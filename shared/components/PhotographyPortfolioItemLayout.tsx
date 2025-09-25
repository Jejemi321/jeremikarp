import { useTranslations } from "next-intl";
import { PortfolioItemType } from "../constant/PortfolioItems";
import ImageWithRatio from "./ui/ImageWithRatio";

function shuffleArray<T>(array: T[]): T[] {
	const shuffled = [...array];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}

function PhotographyPortfolioItemLayout({ el }: { el: PortfolioItemType }) {
	const shuffledImages = shuffleArray(el.imgArray ?? []);
	const t = useTranslations("portfolioProjects");

	return (
		<>
			<div className='mb-2.5'>
				<h2 className='text-5xl font-bold uppercase sm:text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl'>
					{t(el.title)}
				</h2>
				<p className='text-sm sm:text-base'>{t(el.description)}</p>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-flow-dense'>
				{shuffledImages.map((img, i) => (
					<ImageWithRatio key={i} src={img} />
				))}
			</div>
		</>
	);
}

export default PhotographyPortfolioItemLayout;
