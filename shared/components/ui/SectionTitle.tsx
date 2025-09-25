function SectionTitle({ children }: { children: string }) {
	return (
		<h2 className='mt-4 mb-2 text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl md:mt-6 md:mb-4'>
			{children}
		</h2>
	);
}

export default SectionTitle;
