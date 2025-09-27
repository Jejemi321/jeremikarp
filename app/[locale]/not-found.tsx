"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";

function NotFound() {
	const tNotFound = useTranslations("NotFound");
	const router = useRouter();
	const redirectTime = 10000; // 10 sekund
	const [counter, setCounter] = useState(10); // licznik w sekundach

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter(prev => prev - 1);
		}, 1000);

		const timeout = setTimeout(() => {
			router.push("/");
		}, redirectTime);

		return () => {
			clearInterval(interval);
			clearTimeout(timeout);
		};
	}, [router]);

	return (
		<div className='flex flex-col items-center justify-center text-center h-lvh'>
			<h1 className='mb-4 text-xl font-bold'>{tNotFound("404Home")}</h1>
			<p className='text-gray-600'>
				{`${tNotFound("RedirectingHome")} ${counter}`}
			</p>
			<Link
				href={"/portfolio"}
				className='px-2 py-1 hover:opacity-75 transitionAll bg-foreground text-background dark:text-dark-background dark:bg-dark-foreground rounded-2xl mt-2.5'>
				{tNotFound("GoNow")}
			</Link>
		</div>
	);
}

export default NotFound;
