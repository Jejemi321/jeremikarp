// TODO: add actual about me content/animations
import SectionTitle from "@/shared/components/ui/SectionTitle";
import { useTranslations } from "next-intl";

function About() {
	const titleT = useTranslations("title");

	return <>{<SectionTitle>{titleT("About")}</SectionTitle>}</>;
}

export default About;
