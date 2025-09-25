import ContactForm from "@/shared/components/ContactForm";
import ContactInfo from "@/shared/components/ContactInfo";
import PageTitle from "@/shared/components/ui/PageTitle";
import { useTranslations } from "next-intl";

function Contact() {
	const titleT = useTranslations("title");

	return (
		<div className='my-20 mx-2.5 sm:mx-5 md:mx-10 lg:mx-15 xl:mx-30 2xl:mx-60'>
			<PageTitle>{titleT("Contact")}</PageTitle>
			<ContactInfo />
			<ContactForm />
		</div>
	);
}

export default Contact;
