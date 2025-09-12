function SectionTitle({
	children,
	home = false,
}: {
	children: string;
	home?: boolean;
}) {
	// TODO: add animation/fancy styles/responsive
	return (
		<h2
			className={`mb-5 mt-2.5 ${
				home ? "text-start text-2xl" : "text-center text-3xl"
			}`}>
			{children}
		</h2>
	);
}

export default SectionTitle;
