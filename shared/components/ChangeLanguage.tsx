"use client";

import { usePathname, useRouter } from "next/navigation";
import { routing } from "@/i18n/routing";

const languages = routing.locales; // np. ["en", "pl"]

const ChangeLanguage: React.FC = () => {
	const router = useRouter();
	const pathname = usePathname();

	// Wyciągamy aktualny język z URL
	const currentLanguage = pathname.split("/")[1] || "en";

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const newLang = e.target.value;
		// Zamieniamy pierwszy segment URL na nowy język
		const newPath = pathname.replace(/^\/[^/]+/, `/${newLang}`);
		router.push(newPath);
	};

	return (
		<select
			aria-label='Select Language'
			className='outline-none cursor-pointer ColorsTransition'
			value={currentLanguage}
			onChange={handleChange}>
			{languages.map(code => (
				<option key={code} value={code}>
					{code.toUpperCase()}
				</option>
			))}
		</select>
	);
};

export default ChangeLanguage;
