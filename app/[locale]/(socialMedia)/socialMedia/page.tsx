// TODO do ti by u
import { useTranslations } from "next-intl";
import BeholdWidget from "@behold/react";

function SocialMedia() {
	const t = useTranslations("socialMedia");
	return (
		<>
			<div className='text-center mb-2.5'>{t("abtMe")}</div>
			<BeholdWidget feedId='nrOAwlL50j9wct2YB29l' />
		</>
	);
}

export default SocialMedia;
