import ContactForm from "@/shared/components/ContactForm";
import ContactInfo from "@/shared/components/ContactInfo";
import SectionTitle from "@/shared/components/ui/SectionTitle";
import { useTranslations } from "next-intl";

function Contact() {
	const titleT = useTranslations("title");

	return (
		<div className='mx-50'>
			<SectionTitle>{titleT("Contact")}</SectionTitle>
			<ContactInfo />
			<ContactForm />
		</div>
	);
}

export default Contact;
