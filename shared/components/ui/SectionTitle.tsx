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
			className={`text-2xl mb-5 mt-2.5 ${home ? "text-start" : "text-center"}`}>
			{children}
		</h2>
	);
}

export default SectionTitle;
