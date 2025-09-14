"use client";
// TODO: add actual resume content/download link/view/animations/react-pdf???/export to pdf
/* nagigation??
img/role/abt me/
contact info
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
import BasicInfoResume from "@/shared/components/resume/BasicInfoResume";
import ContactInfoResume from "@/shared/components/resume/ContactInfoResume";
import TechSkillsResume from "@/shared/components/resume/TechSkillsResume";
import SectionTitle from "@/shared/components/ui/SectionTitle";
import { useTranslations } from "next-intl";

function Resume() {
	const tNav = useTranslations("nav");
	return (
		<div className='mx-50'>
			<SectionTitle>{tNav("Resume")}</SectionTitle>
			<BasicInfoResume />
			<ContactInfoResume />
			<TechSkillsResume />
		</div>
	);
}

export default Resume;
