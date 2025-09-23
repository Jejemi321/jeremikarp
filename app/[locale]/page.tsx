// TODO: animations/responsive/scrollbar/i18n
import AbtMeHowIWork from "@/shared/components/abtMe/AbtMeHowIWork";
import ContactInfo from "@/shared/components/ContactInfo";
import HomeHeader from "@/shared/components/HomeHeader";
import PortfolioHome from "@/shared/components/PortfolioHome";
import HobbyResume from "@/shared/components/resume/HobbyResume";
import SectionTitle from "@/shared/components/ui/PageTitle";
import { useTranslations } from "next-intl";

export default function HomePage() {
	const titleT = useTranslations("title");
	return (
		<div className='px-3 3xs:px-5 md:px-7 lg:px-20 2xl:px-40'>
			<HomeHeader />
			<AbtMeHowIWork />
			<SectionTitle home>{titleT("Portfolio")}</SectionTitle>
			<PortfolioHome />
			<HobbyResume />
			<SectionTitle home>{titleT("Contact")}</SectionTitle>
			<ContactInfo />
		</div>
	);
}
