//TODO education delete
"use client";
import CertificationsResume from "@/shared/components/resume/CertificationsResume";
import ContactInfoResume from "@/shared/components/resume/ContactInfoResume";
import EducationResume from "@/shared/components/resume/EducationResume";
import HobbyResume from "@/shared/components/resume/HobbyResume";
import LanguagesResume from "@/shared/components/resume/LanguagesResume";
import TechSkillsResume from "@/shared/components/resume/TechSkillsResume";
import PageTitle from "@/shared/components/ui/PageTitle";
import { useTranslations } from "next-intl";
import ThreeProjects from "@/shared/components/ThreeProjects";
import BasicInfo from "@/shared/components/BasicInfo";

function Resume() {
	const tNav = useTranslations("nav");
	return (
		<div className='mx-2.5 sm:mx-5 md:mx-10 lg:mx-15 xl:mx-30 2xl:mx-60'>
			<PageTitle>{tNav("Resume")}</PageTitle>
			<BasicInfo />
			<ContactInfoResume />
			<TechSkillsResume />
			<ThreeProjects />
			<LanguagesResume />
			<EducationResume />
			<CertificationsResume />
			<HobbyResume />
		</div>
	);
}

export default Resume;
