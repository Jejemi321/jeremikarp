function PageTitle({
	children,
	home = false,
}: {
	children: string;
	home?: boolean;
}) {
	return (
		<h2
			className={`mb-5 mt-2.5 ${
				home ? "text-start text-2xl" : "text-center text-3xl"
			}`}>
			{children}
		</h2>
	);
}

export default PageTitle;
