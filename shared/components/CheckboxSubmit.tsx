// components/CheckboxSubmit.tsx
import Link from "next/link";

interface CheckboxSubmitProps {
	agree: boolean;
	setAgree: (value: boolean) => void;
	status: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	t: any;
}

export default function CheckboxSubmit({
	agree,
	setAgree,
	status,
	t,
}: CheckboxSubmitProps) {
	return (
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
				value={status === "sending" ? t("Sending") : t("BtnSubmitContactForm")}
				className='inline-block px-6 py-3 mt-2 font-medium uppercase border rounded outline-none cursor-pointer transitionAll sm:mt-0 hover:text-background dark:hover:text-dark-background hover:bg-foreground dark:hover:bg-dark-foreground disabled:opacity-50 disabled:cursor-not-allowed'
			/>
		</div>
	);
}
