"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

interface FormData {
	name: string;
	email: string;
	company: string;
	number: string;
	message: string;
}

type Status = "idle" | "sending" | "sent" | "failed";

export default function ContactForm() {
	const [form, setForm] = useState<FormData>({
		name: "",
		email: "",
		company: "",
		number: "",
		message: "",
	});

	const [status, setStatus] = useState<Status>("idle");
	const [agree, setAgree] = useState(false);

	const t = useTranslations("contact");

	useEffect(() => {
		if (status === "sent") {
			const timer = setTimeout(() => {
				setStatus("idle"); // reset status po 3 sekundach
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, [status]);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!form.name.trim()) return toast.error(t("ErrorName"));
		if (!form.email.trim()) return toast.error(t("ErrorEmailRequired"));
		if (!/\S+@\S+\.\S+/.test(form.email))
			return toast.error(t("ErrorEmailInvalid"));
		if (!form.message.trim()) return toast.error(t("ErrorMessage"));
		if (!agree) return toast.error(t("ErrorAgree"));

		const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID!;
		const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
		const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY!;
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

	const handleChange = (field: keyof FormData, value: string) => {
		setForm({ ...form, [field]: value });
	};

	return (
		<div className='relative mt-3 border rounded md:mx-5 lg:mx-0'>
			<h1 className='mt-5 text-xl font-medium tracking-widest text-center uppercase sm:text-2xl xl:text-3xl'>
				{t("ContactForm")}
			</h1>
			<form className='p-2.5' onSubmit={handleSubmit}>
				<div className='flex flex-col justify-between mt-5 sm:flex-row gap-x-10'>
					<input
						type='text'
						placeholder={t("InputName")}
						value={form.name}
						onChange={e => handleChange("name", e.target.value)}
						className='pb-2 mb-5 tracking-wide border-b outline-none sm:w-1/2 sm:text-base text-foreground dark:text-dark-foreground'
					/>
					<input
						type='text'
						placeholder={t("InputCompany")}
						value={form.company}
						onChange={e => handleChange("company", e.target.value)}
						className='pb-2 mb-5 tracking-wide border-b outline-none sm:w-1/2 sm:text-base text-foreground dark:text-dark-foreground'
					/>
				</div>

				<div className='flex flex-col justify-between mt-5 sm:flex-row gap-x-10'>
					<input
						type='number'
						placeholder={t("InputNumber")}
						value={form.number}
						onChange={e => handleChange("number", e.target.value)}
						className='pb-2 mb-5 tracking-wide border-b outline-none sm:w-1/2 sm:text-base text-foreground dark:text-dark-foreground'
					/>
					<input
						type='text'
						placeholder={t("InputEmail")}
						value={form.email}
						onChange={e => handleChange("email", e.target.value)}
						className='pb-2 mb-5 tracking-wide border-b outline-none sm:w-1/2 sm:text-base text-foreground dark:text-dark-foreground'
					/>
				</div>

				<textarea
					placeholder={t("InputMessages")}
					value={form.message}
					onChange={e => handleChange("message", e.target.value)}
					className='w-full h-32 pb-2 mb-5 tracking-wide border-b outline-none resize-none sm:text-base text-foreground dark:text-dark-foreground'
				/>

				<div className='flex flex-col items-center justify-between mt-5 sm:flex-row'>
					<label className='flex items-center cursor-pointer gap-x-2'>
						<input
							type='checkbox'
							checked={agree}
							onChange={() => setAgree(!agree)}
							className='w-4 h-4 transition duration-500 border-2 rounded-md appearance-none cursor-pointer border-foreground dark:border-dark-foreground checked:bg-foreground dark:checked:bg-dark-foreground hover:opacity-80'
						/>
						<span className='text-xs font-medium select-none'>
							{t("Accept")}{" "}
							<Link href='/privatepolicy'>
								<span className='transition-opacity duration-300 ease-in-out hover:opacity-75'>
									{t("PrivacyPolicy")}
								</span>
							</Link>
						</span>
					</label>

					<input
						type='submit'
						disabled={status === "sending"}
						value={
							status === "sending" ? t("Sending") : t("BtnSubmitContactForm")
						}
						className='inline-block px-6 py-3 mt-2 font-medium uppercase border rounded outline-none cursor-pointer transitionAll sm:mt-0 hover:text-background dark:hover:text-dark-background hover:bg-foreground dark:hover:bg-dark-foreground disabled:opacity-50 disabled:cursor-not-allowed'
					/>
				</div>
			</form>
		</div>
	);
}
