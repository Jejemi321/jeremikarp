//TODO techicon/swiper/client
import { WebPortfolioItemType } from "../constant/WebPortfolioItems";
import SwiperWebPortfolio from "./SwiperWebPortfolio";

function WebsitePortfolioItemLayout({ el }: { el: WebPortfolioItemType }) {
	return (
		<>
			<div className='flex gap-x-2.5'>
				<div className='w-3/4 h-[85vh] overflow-scroll'>
					<h2 className='text-2xl'>{el.title}</h2>
					<img
						src={el.imageCover}
						className='object-cover w-full h-svh'
						alt=''
					/>
				</div>
				<div className='sticky w-1/4 p-4 border '></div>
			</div>
		</>
	);
}

export default WebsitePortfolioItemLayout;
