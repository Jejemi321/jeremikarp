//TODO: darkmode check
"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

interface FormInterface {
	name: string;
	email: string;
	company: string;
	number: string;
	message: string;
}
interface FormInterfaceError {
	name: number;
	email: number;
	company: number;
	number: number;
	message: number;
	agree: number;
}
type status = "idle" | "sending" | "sent" | "failed";
function ContactForm() {
	const [Form, setForm] = useState<FormInterface>({
		name: "",
		company: "",
		email: "",
		number: "",
		message: "",
	});
	const [FormErrors, setFormError] = useState<FormInterfaceError>({
		name: 0,
		company: 0,
		email: 0,
		number: 0,
		message: 0,
		agree: 0,
	});
	const [status, setStatus] = useState<status>("idle"); //! idle, sending, sent, failed
	const [agree, setagree] = useState<boolean>(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!Form.name.trim()) {
			toast.error(tForm("ErrorName"));
			return;
		}
		if (!Form.email.trim()) {
			toast.error(tForm("ErrorEmailRequired"));
			return;
		} else if (!/\S+@\S+\.\S+/.test(Form.email)) {
			toast.error(tForm("ErrorEmailInvalid"));
			return;
		}
		if (!Form.message.trim()) {
			toast.error(tForm("ErrorMessage"));
			return;
		}
		if (!agree) {
			toast.error(tForm("ErrorAgree"));
			return;
		}

		const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
		const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
		const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
		setStatus("sending");
		const templatePrams = {
			from_name: Form.name,
			from_mail: Form.email,
			from_number: Form.number,
			from_company: Form.company,
			from_message: Form.message,
		};
		try {
			await toast.promise(
				emailjs.send(serviceId!, templateId!, templatePrams, publicKey!),
				{
					loading: tForm("FormSending"),
					success: tForm("FormSuccess"),
					error: tForm("FormError"),
				}
			);
			setForm({
				name: "",
				email: "",
				number: "",
				company: "",
				message: "",
			});
			setagree(false);
			setStatus("sent");
		} catch {
			setStatus("failed");
		}
	};

	const tForm = useTranslations("contact");
	return (
		<div className='relative mt-3 border rounded md:mx-5 lg:mx-0'>
			<h1 className='mt-5 text-xl font-medium tracking-widest text-center uppercase sm:text-2xl xl:text-3xl'>
				{tForm("ContactForm")}
			</h1>
			<form className='p-2.5' onSubmit={handleSubmit}>
				<div className='flex flex-col justify-between mt-5 sm:flex-row gap-x-10'>
					<input
						type='text'
						className='pb-2 mb-5 text-sm tracking-wide border-b outline-none sm:w-1/2 sm:text-base text-foreground dark:text-dark-foreground'
						placeholder={tForm("InputName")}
						onChange={e => setForm({ ...Form, name: e.target.value })}
						value={Form.name || ""}
					/>
					<input
						type='text'
						className='pb-2 mb-5 text-sm tracking-wide border-b outline-none sm:w-1/2 sm:text-base text-foreground dark:text-dark-foreground'
						placeholder={tForm("InputCompany")}
						onChange={e => setForm({ ...Form, company: e.target.value })}
						value={Form.company || ""}
					/>
				</div>
				<div className='flex flex-col justify-between mt-5 sm:flex-row gap-x-10'>
					<input
						type='text'
						className='pb-2 mb-5 text-sm tracking-wide border-b outline-none sm:w-1/2 sm:text-base text-foreground dark:text-dark-foreground'
						placeholder={tForm("InputNumber")}
						onChange={e => setForm({ ...Form, number: e.target.value })}
						value={Form.number || ""}
					/>
					<input
						type='text'
						className='pb-2 mb-5 text-sm tracking-wide border-b outline-none sm:w-1/2 sm:text-base text-foreground dark:text-dark-foreground'
						placeholder={tForm("InputEmail")}
						onChange={e => setForm({ ...Form, email: e.target.value })}
						value={Form.email || ""}
					/>
				</div>
				<div className='mt-5'>
					<textarea
						onChange={e => setForm({ ...Form, message: e.target.value })}
						value={Form.message || ""}
						className='w-full h-32 pb-2 mb-5 text-sm tracking-wide border-b outline-none resize-none sm:text-base text-foreground dark:text-dark-foreground'
						placeholder={tForm("InputMessages")}></textarea>
				</div>
				<div className='flex flex-col items-center justify-between mt-5 sm:flex-row'>
					<label className='flex flex-col cursor-pointer'>
						<div className='flex'>
							<input
								type='checkbox'
								checked={agree}
								onChange={() => setagree(!agree)}
								className='w-4 h-4 transition duration-500 border-2 rounded-md appearance-none cursor-pointer hover:opacity-80 border-foreground dark:border-dark-foreground checked:bg-foreground dark:checked:bg-dark-foreground'
							/>
							<p className='flex text-xs font-medium select-none gap-x-1 ms-2'>
								{tForm("Accept")}
								<Link href={"/privatepolicy"}>
									<span className='transition-opacity duration-300 ease-in-out hover:opacity-75'>
										{tForm("PrivacyPolicy")}
									</span>
								</Link>
							</p>
						</div>
					</label>
					<input
						value={
							status != "sending"
								? tForm("BtnSubmitContactForm")
								: tForm("Sending")
						}
						disabled={status === "sending"}
						type='submit'
						className={`${
							status != "sending" ? "" : "cursor-not-allowed opacity-50"
						} inline-block mt-2 sm:mt-0 px-6 py-3 text-sm font-medium uppercase transition border rounded outline-none cursor-pointer hover:text-background dark:hover:text-dark-background hover:bg-foreground dark:hover:bg-dark-foreground disabled:opacity-50 disabled:cursor-not-allowed transitionAll`}
					/>
				</div>
			</form>
		</div>
	);
}

export default ContactForm;
