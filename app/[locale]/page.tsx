// TODO: About me, Portfolio, Contact sections to be filled with content/animations
import HomeHeader from "@/shared/components/HomeHeader";
import SectionTitle from "@/shared/components/ui/SectionTitle";
import { useTranslations } from "next-intl";

export default function HomePage() {
	const titleT = useTranslations("title");
	return (
		<div className='px-3 3xs:px-5 md:px-7 lg:px-20 2xl:px-40'>
			<HomeHeader />
			<SectionTitle home>{titleT("About")}</SectionTitle>
			<div className=''></div>
			<SectionTitle home>{titleT("Portfolio")}</SectionTitle>
			<SectionTitle home>{titleT("Contact")}</SectionTitle>
		</div>
	);
}
