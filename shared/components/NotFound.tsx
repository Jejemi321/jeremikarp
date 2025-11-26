"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface NotFoundProps {
	redirectTo: string;
	titleKey: string;
	redirectTextKey: string;
}

const NotFound: React.FC<NotFoundProps> = ({
	redirectTo,
	titleKey,
	redirectTextKey,
}) => {
	const t = useTranslations("NotFound");
	const router = useRouter();
	const redirectTime = 10000;
	const [counter, setCounter] = useState(10);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter(prev => prev - 1);
		}, 1000);

		const timeout = setTimeout(() => {
			router.push(redirectTo);
		}, redirectTime);

		return () => {
			clearInterval(interval);
			clearTimeout(timeout);
		};
	}, [router, redirectTo]);

	return (
		<div className='flex flex-col items-center justify-center text-center h-lvh'>
			<h1 className='mb-4 text-xl font-bold'>{t(titleKey)}</h1>
			<p className='text-gray-600'>{`${t(redirectTextKey)} ${counter}`}</p>
			<Link
				href={redirectTo}
				className='px-2 py-1 hover:opacity-75 transitionAll bg-foreground text-background dark:text-dark-background dark:bg-dark-foreground rounded-2xl mt-2.5'>
				{t("GoNow")}
			</Link>
		</div>
	);
};

export default NotFound;
