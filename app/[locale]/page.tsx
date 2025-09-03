"use client";
import HomeHeader from "@/shared/components/HomeHeader";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function HomePage() {
	const t = useTranslations("");
	const text = "Welcome to my portfolio website!";
	const isInView = true; // Replace with actual in-view logic if needed
	return (
		<div className='px-3 3xs:px-5 md:px-7 lg:px-20 2xl:px-40'>
			<HomeHeader />
		</div>
	);
}
