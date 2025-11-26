function Pagination({
	totalPages,
	currentPage,
	setCurrentPage,
}: {
	totalPages: number;
	currentPage: number;
	setCurrentPage: (page: number) => void;
}) {
	const handlePageChange = (page: number) => {
		if (page >= 1 && page <= totalPages) setCurrentPage(page);
	};
	return (
		<div className='flex items-center justify-center gap-2.5 my-5 font-light select-none 4xl:gap-3 text-xl'>
			<div
				className={`size-5 ${
					currentPage === 1 ? "cursor-not-allowed opacity-50" : "cursor-pointer"
				}`}
				onClick={() => {
					handlePageChange(currentPage - 1);
				}}>
				<i className='fi fi-rr-arrow-small-left size-5'></i>
			</div>
			<div className=''>
				{currentPage} / {totalPages}
			</div>
			<div
				className={`size-5  ${
					currentPage === totalPages
						? "cursor-not-allowed opacity-50"
						: "cursor-pointer"
				}`}
				onClick={() => {
					handlePageChange(currentPage + 1);
				}}>
				<i className='text-xl fi fi-rr-arrow-small-right'></i>
			</div>
		</div>
	);
}

export default Pagination;
