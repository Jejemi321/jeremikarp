interface InputFieldProps {
	type: string;
	placeholder: string;
	value: string;
	onChange: (_: string) => void;
	className?: string;
}

export default function InputField({
	type,
	placeholder,
	value,
	onChange,
	className = "",
}: InputFieldProps) {
	return (
		<input
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={e => onChange(e.target.value)}
			className={`pb-2 mb-5 tracking-wide border-b outline-none sm:w-1/2 sm:text-base text-foreground dark:text-dark-foreground ${className}`}
		/>
	);
}
