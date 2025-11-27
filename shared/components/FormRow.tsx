// components/FormRow.tsx
import InputField from "./InputField";
import { FormData } from "../types";

export type Field = { name: keyof FormData; type: string; placeholder: string };

interface FormRowProps {
	fields: Field[];
	form: FormData;
	handleChange: (_: keyof FormData, value: string) => void;
}

export default function FormRow({ fields, form, handleChange }: FormRowProps) {
	return (
		<div className='flex flex-col justify-between mt-5 sm:flex-row gap-x-10'>
			{fields.map(field => (
				<InputField
					key={field.name}
					type={field.type}
					placeholder={field.placeholder}
					value={form[field.name]}
					onChange={value => {
						handleChange(field.name, value);
					}}
				/>
			))}
		</div>
	);
}
