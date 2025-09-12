"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function SwiperWebPortfolio({ imgArray }: { imgArray?: string[] }) {
	return (
		<Swiper slidesPerView={1}>
			{imgArray?.map(el => (
				<SwiperSlide key={Math.random()}>
					<img src={el} alt='' />
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export default SwiperWebPortfolio;
