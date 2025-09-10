"use client";

import { useState, ChangeEvent, FormEvent } from "react";

import ContactInfo from "@/shared/components/ContactInfo";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface FormState {
	name: string;
	email: string;
	number: string;
	company: string;
	message: string;
}

interface FormErrors {
	name?: number;
	email?: number;
	number?: number;
	company?: number;
	message?: number;
	agree?: number;
}

const Contact: React.FC = () => {
	const t = useTranslations("contact");

	const [form, setForm] = useState<FormState>({
		name: "",
		email: "",
		number: "",
		company: "",
		message: "",
	});
	const [agree, setAgree] = useState<boolean>(false);
	const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">(
		"idle"
	);
	const [formErrors, setFormErrors] = useState<FormErrors>({});

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setForm(prev => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const errors: FormErrors = {};

		if (!form.name.trim()) errors.name = 0;
		if (!form.email.trim()) {
			errors.email = 0;
		} else if (!/\S+@\S+\.\S+/.test(form.email)) {
			errors.email = 1;
		}
		if (!form.number.trim()) errors.number = 0;
		if (!form.message.trim()) errors.message = 0;
		if (!agree) errors.agree = 0;

		if (Object.keys(errors).length > 0) {
			setFormErrors(errors);
			return;
		}

		setFormErrors({});

		const serviceId = "service_v7wupse";
		const templateId = "template_6fx0kmt";
		const publicKey = "P24GrzNlLKqTwaufi";

		setStatus("sending");

		const templateParams = {
			from_name: form.name,
			from_mail: form.email,
			from_number: form.number,
			from_company: form.company,
			from_message: form.message,
		};

		toast
			.promise(emailjs.send(serviceId, templateId, templateParams, publicKey), {
				loading: t("FormSending"),
				success: t("FormSuccess"),
				error: t("FormError"),
			})
			.then(() => {
				setForm({
					name: "",
					email: "",
					number: "",
					company: "",
					message: "",
				});
				setAgree(false);
				setStatus("sent");
			})
			.catch(() => {
				setStatus("failed");
			});
	};

	const errClass = "text-xs text-[#C9184A] dark:text-[#FF3A0E]";

	return (
		<div className='max-w-[760px] md:mx-auto mx-4 2xs:mx-6 xs:mx-8 sm:mx-10 md:h-[89vh] md:flex md:justify-center md:flex-col 3xl:my-[4.5px]'>
			<div className='md:mx-5 lg:mx-0'>
				<h3 className='mb-5 text-xl font-medium tracking-widest text-center uppercase 2xs:text-2xl xl:text-3xl ColorsTransition'>
					{t("ContactInfo")}
				</h3>
				<ContactInfo />
			</div>

			<div className='relative mt-3 border rounded BorderColor ColorsTransition md:mx-5 lg:mx-0'>
				<h1 className='mt-5 text-xl font-medium tracking-widest text-center uppercase 2xs:text-2xl xl:text-3xl ColorsTransition'>
					{t("ContactForm")}
				</h1>
				<form className='px-3 py-2 my-1' onSubmit={handleSubmit}>
					{/* Input Fields in Two Columns */}
					<div className='flex flex-wrap justify-between gap-4 mb-4'>
						<div className='w-full md:w-[48%]'>
							<input
								type='text'
								name='name'
								placeholder={t("InputName")}
								onChange={handleChange}
								value={form.name}
								className='w-full border-b InputContact'
							/>
							{formErrors.name === 0 && (
								<p className={errClass}>{t("ErrorName")}</p>
							)}
						</div>

						<div className='w-full md:w-[48%]'>
							<input
								type='text'
								name='company'
								placeholder={t("InputCompany")}
								onChange={handleChange}
								value={form.company}
								className='w-full border-b InputContact'
							/>
							{formErrors.company === 0 && (
								<p className={errClass}>{t("ErrorCompany")}</p>
							)}
						</div>

						<div className='w-full md:w-[48%]'>
							<input
								type='text'
								name='number'
								placeholder={t("InputNumber")}
								onChange={handleChange}
								value={form.number}
								className='w-full border-b InputContact'
							/>
							{formErrors.number === 0 && (
								<p className={errClass}>{t("ErrorNumber")}</p>
							)}
						</div>

						<div className='w-full md:w-[48%]'>
							<input
								type='text'
								name='email'
								placeholder={t("InputEmail")}
								onChange={handleChange}
								value={form.email}
								className='w-full border-b InputContact'
							/>
							{formErrors.email === 0 && (
								<p className={errClass}>{t("ErrorEmailRequired")}</p>
							)}
							{formErrors.email === 1 && (
								<p className={errClass}>{t("ErrorEmailInvalid")}</p>
							)}
						</div>

						<div className='w-full'>
							<textarea
								name='message'
								placeholder={t("InputMessages")}
								onChange={handleChange}
								value={form.message}
								className='w-full h-32 border-b resize-none InputContact'></textarea>
							{formErrors.message === 0 && (
								<p className={errClass}>{t("ErrorMessage")}</p>
							)}
						</div>
					</div>

					{/* Checkbox & Submit Button */}
					<div className='flex flex-col items-center justify-between sm:flex-row'>
						<label className='flex flex-col cursor-pointer'>
							<div className='flex'>
								<input
									type='checkbox'
									checked={agree}
									onChange={() => setAgree(!agree)}
									className='w-4 h-4 transition duration-500 border-2 rounded-md appearance-none cursor-pointer hover:opacity-80 border-black-400 dark:border-mint-400 checked:bg-black-400 dark:checked:bg-mint-400'
								/>
								<p className='flex text-xs font-medium select-none gap-x-1 ms-2'>
									{t("Accept")}
									<Link href='/PrivatePolicy'>
										<span className='transition-opacity duration-300 ease-in-out hover:opacity-75'>
											{t("PrivacyPolicy")}
										</span>
									</Link>
								</p>
							</div>
							{formErrors.agree === 0 && (
								<p className={`${errClass} mt-1`}>{t("ErrorAgree")}</p>
							)}
						</label>

						<input
							type='submit'
							value={
								status !== "sending" ? t("BtnSubmitContactForm") : t("Sending")
							}
							disabled={status === "sending"}
							className={`${
								status !== "sending" ? "" : "cursor-not-allowed opacity-50"
							} inline-block mt-2 sm:mt-0 px-6 py-3 text-sm font-medium uppercase transition border rounded outline-none cursor-pointer hover:bg-mint-600 dark:hover:bg-black-400 disabled:opacity-50 disabled:cursor-not-allowed BorderColor ColorsTransition`}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
