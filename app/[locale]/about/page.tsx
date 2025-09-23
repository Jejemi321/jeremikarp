"use client";
import AbtMeFaq from "@/shared/components/abtMe/AbtMeFaq";
import AbtMeHowIWork from "@/shared/components/abtMe/AbtMeHowIWork";
import AbtMePeople from "@/shared/components/abtMe/AbtMePeople";
import AbtMeSkills from "@/shared/components/abtMe/AbtMeSkills";
import AbtMeStats from "@/shared/components/abtMe/AbtMeStats";
import BasicInfo from "@/shared/components/BasicInfo";
import ThreeProjects from "@/shared/components/ThreeProjects";
import PageTitle from "@/shared/components/ui/PageTitle";
import { useTranslations } from "next-intl";
//TODO core events i mean ocean philipines
function About() {
	const titleT = useTranslations("title");

	return (
		<div className='mx-50'>
			<PageTitle>{titleT("About")}</PageTitle>
			<BasicInfo />
			<AbtMeSkills />
			<AbtMeHowIWork />
			<AbtMeStats />
			<ThreeProjects />
			<AbtMePeople />
			<AbtMeFaq />
		</div>
	);
}

export default About;
