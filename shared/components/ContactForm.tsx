"use client";
import { useTranslations } from "next-intl";
import React from "react";
import FormRow, { Field } from "./FormRow";
import CheckboxSubmit from "./CheckboxSubmit";
import { useContactForm } from "@/hooks/useContactForm";

export default function ContactForm() {
	const t = useTranslations("contact");
	const { form, status, agree, handleChange, setAgree, handleSubmit } =
		useContactForm(t);

	const firstRowFields: Field[] = [
		{ name: "name", type: "text", placeholder: t("InputName") },
		{ name: "company", type: "text", placeholder: t("InputCompany") },
	];

	const secondRowFields: Field[] = [
		{ name: "number", type: "number", placeholder: t("InputNumber") },
		{ name: "email", type: "text", placeholder: t("InputEmail") },
	];

	return (
		<div className='relative mt-3 border rounded md:mx-5 lg:mx-0'>
			<h1 className='mt-5 text-xl font-medium tracking-widest text-center uppercase sm:text-2xl xl:text-3xl'>
				{t("ContactForm")}
			</h1>

			<form className='p-2.5' onSubmit={handleSubmit}>
				<FormRow
					fields={firstRowFields}
					form={form}
					handleChange={handleChange}
				/>
				<FormRow
					fields={secondRowFields}
					form={form}
					handleChange={handleChange}
				/>

				<textarea
					placeholder={t("InputMessages")}
					value={form.message}
					onChange={e => handleChange("message", e.target.value)}
					className='w-full h-32 pb-2 mb-5 tracking-wide border-b outline-none resize-none sm:text-base text-foreground dark:text-dark-foreground'
				/>

				<CheckboxSubmit
					agree={agree}
					setAgree={setAgree}
					status={status}
					t={t}
				/>
			</form>
		</div>
	);
}
