import { contactInfo } from "@/shared/types";

export const ContactInfo: contactInfo[] = [
	{
		id: 1,
		iconClass: "fi fi-rr-envelope",
		name: "Email",
		value: "jeremikarp@gmail.com",
		typeHref: "mailto:",
	},
	{
		id: 2,
		iconClass: "fi fi-rr-phone-call",
		name: "Phone",
		value: "+48 518 299 555",
		typeHref: "tel:",
	},
];
