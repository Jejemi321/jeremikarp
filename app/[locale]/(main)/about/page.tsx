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
//? core events i mean ocean philippines
function About() {
	const titleT = useTranslations("title");

	return (
		<div className='mx-2.5 sm:mx-5 md:mx-10 lg:mx-15 xl:mx-30 2xl:mx-60'>
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
