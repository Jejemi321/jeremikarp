// TODO: add actual resume content/download link/view/animations/react-pdf???/export to pdf
/* nagigation??
img/role/abt me/contact info
Tech skills
	Languages: JS, TS, HTML, CSS
	Frameworks: React, Next.js, Tailwind, Node.js
	Tools: Git, VSCode, Vercel, Supabase, Docker
	other tools
	showing on top best and load more
projects
soft skills
Languages
education
curses
certifiations
hoobis
*/
import SectionTitle from "@/shared/components/ui/SectionTitle";
import { blankJpg } from "@/shared/constant/const";
import { useTranslations } from "next-intl";
import Image from "next/image";

function Resume() {
	const t = useTranslations("nav");
	return (
		<div className='mx-40'>
			<SectionTitle>{t("Resume")}</SectionTitle>
			<Image src={blankJpg} alt='' width={100} height={100} />
		</div>
	);
}

export default Resume;
