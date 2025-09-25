"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import PageTitle from "@/shared/components/ui/PageTitle";

export default function PrivatePolicy() {
	const t = useTranslations("privatePolicy");

	return (
		<div className='max-w-4xl p-6 mx-auto'>
			<PageTitle>{t("title")}</PageTitle>
			<motion.div
				className='mt-6 whitespace-pre-line'
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}>
				{t("text")}
			</motion.div>
		</div>
	);
}
