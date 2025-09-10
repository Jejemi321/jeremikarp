// TODO: add actual resume content/download link/view/animations
import SectionTitle from "@/shared/components/ui/SectionTitle";
import { useTranslations } from "next-intl";

function Resume() {
	const t = useTranslations("nav");
	return <SectionTitle>{t("Resume")}</SectionTitle>;
}

export default Resume;
