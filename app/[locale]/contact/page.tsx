import ContactForm from "@/shared/components/ContactForm";
import ContactInfo from "@/shared/components/ContactInfo";
import PageTitle from "@/shared/components/ui/PageTitle";
import { useTranslations } from "next-intl";

function Contact() {
	const titleT = useTranslations("title");

	return (
		<div className='my-20 mx-150'>
			<PageTitle>{titleT("Contact")}</PageTitle>
			<ContactInfo />
			<ContactForm />
		</div>
	);
}

export default Contact;
