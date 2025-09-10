import Link from "next/link";
import { PortfolioItemType } from "../constant/const";

function PhotographyPortfolioItemLayout({
	el,
	locale,
}: {
	el: PortfolioItemType;
	locale: string;
}) {
	return (
		<div className=''>
			<Link href={`/${locale}/portfolio`}>{"<--"}</Link>
		</div>
	);
}

export default PhotographyPortfolioItemLayout;
