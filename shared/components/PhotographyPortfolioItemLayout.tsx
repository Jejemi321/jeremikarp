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
				<h2 className='uppercase text-8xl'>{t(el.title)}</h2>
				<p className=''>{t(el.description)}</p>
			</div>
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 auto-rows-[500px] grid-flow-dense'>
				{shuffledImages.map((img, i) => (
					<ImageWithRatio key={i} src={img} />
				))}
			</div>
		</>
	);
}

export default PhotographyPortfolioItemLayout;
