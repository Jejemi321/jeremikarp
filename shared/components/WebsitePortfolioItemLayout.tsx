import Link from "next/link";
import { PortfolioItemType } from "../constant/PortfolioItems";
import TechTest from "./test/TechTest";

function WebsitePortfolioItemLayout({
	el,
	locale,
}: {
	el: PortfolioItemType;
	locale: string;
}) {
	return (
		<div className='px-20'>
			<Link href={`/${locale}/portfolio`}>
				<i className='text-3xl fi fi-rr-arrow-small-left size-5'></i>
			</Link>
			<div className='flex'>
				<div className='w-3/4 border'>
					<h2 className=''>{el.title}</h2>
				</div>
				<div className='w-1/4 border'>
					{el.techStack?.map(id => (
						<TechTest key={id} id={id} />
					))}
				</div>
			</div>
		</div>
	);
}

export default WebsitePortfolioItemLayout;
