import { useTranslations } from "next-intl";

function ContactInfo() {
	const t = useTranslations("contact");
	const ContactInfoEl =
		"flex items-center justify-center px-4 py-2 mb-3 text-xs font-light border rounded shadow-lg 2xl:text-base 4xl:text-xl xs:text-sm border-opacity-5 BorderColor gap-x-2;";
	const iconClass = "size-4 4xl:size-5 4xl:text-xl mr-2.5";
	return (
		<div className='flex flex-col items-center justify-center sm:justify-between sm:flex-row'>
			<div className='w-3/4 sm:w-2/5'>
				<a href='tel:+48518299555' className={ContactInfoEl}>
					<i className={`fi fi-rr-phone-rotary ${iconClass}`}></i>
					<p>+48 518 299 555</p>
				</a>
				<a href='mailto:jeremikarp@gmail.com' className={ContactInfoEl}>
					<i className={`fi fi-rr-envelope ${iconClass}`}></i>
					<p>jeremikarp@gmail.com</p>
				</a>
			</div>
			<div className='w-3/4 sm:w-2/5'>
				<div className={ContactInfoEl}>
					<i className={`fi fi-rr-clock-five ${iconClass}`}></i>
					<p>{t("WorkTime")}</p>
				</div>
				<div className={ContactInfoEl}>
					<i className={`fi fi-rr-marker ${iconClass}`}></i>
					<p>{t("CityCountry")}</p>
				</div>
			</div>
		</div>
	);
}

export default ContactInfo;
