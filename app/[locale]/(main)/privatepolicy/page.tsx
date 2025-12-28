"use client";
import { useTranslations } from "next-intl";
import PageTitle from "@/shared/components/ui/PageTitle";

export default function PrivatePolicy() {
	const t = useTranslations("privatePolicy");

	return (
		<div className='max-w-4xl px-4 py-12 mx-auto sm:px-6 lg:px-8'>
			<PageTitle>{t("title")}</PageTitle>
			<div className='space-y-10'>
				{Array.from({ length: 9 }).map((_, index) => (
					<section
						key={index}
						className='p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 sm:p-8'>
						<h2 className='mb-4 text-xl font-semibold text-gray-900 sm:text-2xl dark:text-gray-100'>
							{index + 1}. {t(`sections.section${index + 1}.heading`)}
						</h2>
						<p className='leading-relaxed text-center text-gray-700 break-words dark:text-gray-300'>
							{t(`sections.section${index + 1}.content`)}
						</p>
					</section>
				))}
			</div>
		</div>
	);
}
