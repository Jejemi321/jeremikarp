// hooks/useContactForm.ts
import { useState, useEffect } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { FormData, Status } from "@/shared/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useContactForm = (t: any) => {
	const [form, setForm] = useState<FormData>({
		name: "",
		email: "",
		company: "",
		number: "",
		message: "",
	});

	const [status, setStatus] = useState<Status>("idle");
	const [agree, setAgree] = useState(false);

	useEffect(() => {
		if (status === "sent") {
			const timer = setTimeout(() => setStatus("idle"), 3000);
			return () => clearTimeout(timer);
		}
	}, [status]);

	const handleChange = (field: keyof FormData, value: string) => {
		setForm({ ...form, [field]: value });
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!form.name.trim()) return toast.error(t("ErrorName"));
		if (!form.email.trim()) return toast.error(t("ErrorEmailRequired"));
		if (!/\S+@\S+\.\S+/.test(form.email))
			return toast.error(t("ErrorEmailInvalid"));
		if (!form.message.trim()) return toast.error(t("ErrorMessage"));
		if (!agree) return toast.error(t("ErrorAgree"));

		const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
		const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
		const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

		if (!serviceId || !templateId || !publicKey)
			throw new Error("EmailJS env variables are not defined");

		const templateParams = {
			from_name: form.name,
			from_mail: form.email,
			from_number: form.number,
			from_company: form.company,
			from_message: form.message,
		};

		setStatus("sending");

		try {
			await toast.promise(
				emailjs.send(serviceId, templateId, templateParams, publicKey),
				{
					loading: t("FormSending"),
					success: t("FormSuccess"),
					error: t("FormError"),
				}
			);
			setForm({ name: "", email: "", company: "", number: "", message: "" });
			setAgree(false);
			setStatus("sent");
		} catch {
			setStatus("failed");
		}
	};

	return { form, status, agree, handleChange, setAgree, handleSubmit };
};
