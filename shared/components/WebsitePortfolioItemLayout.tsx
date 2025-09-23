import { WebPortfolioItemType } from "../constant/WebPortfolioItems";
import { useTranslations } from "next-intl";
import TechIcon from "./TechIcon";

function WebsitePortfolioItemLayout({ el }: { el: WebPortfolioItemType }) {
	const tpP = useTranslations("portfolioProjects");

	return (
		<section className='space-y-6'>
			{/* Tytuł projektu */}
			<h2 className='text-6xl font-bold uppercase'>{tpP(el.title)}</h2>

			{/* Kontener główny z przewijaną lewą sekcją */}
			<div className='flex flex-col md:flex-row gap-6 h-[80vh]'>
				{/* Lewa sekcja - Screenshots */}
				<div className='pr-2 overflow-y-auto md:w-3/4'>
					<h4 className='mb-3 text-xl font-semibold'>Project Screenshots</h4>
					<div className='grid grid-cols-1 gap-1 p-2.5 md:grid-cols-2'>
						{el.imgArray?.map((img, i) => (
							<div key={i} className='overflow-hidden rounded-lg shadow-md'>
								<img
									src={img}
									alt={`Screenshot ${i + 1}`}
									className='object-cover w-full h-full transition-transform duration-300 hover:scale-105'
								/>
							</div>
						))}
					</div>
				</div>

				{/* Prawa sekcja - Project Info */}
				<div className='flex-shrink-0 p-4 rounded-lg shadow-md md:w-1/4 bg-gray-50 dark:bg-gray-800'>
					<h4 className='mb-4 text-2xl font-semibold'>Project Info</h4>
					<div className='space-y-3 text-sm md:text-base'>
						{/* Podstawowe informacje */}
						<div className='space-y-1'>
							<p className='text-xl font-medium'>Basic Info</p>
							<p>Title: {el.title}</p>
							<div className='flex items-center gap-2'>
								Status:
								<span
									className={`inline-block h-4 w-4 rounded-full ${
										el.status === "Finish"
											? "bg-green-500"
											: el.status === "In Progress"
											? "bg-orange-500"
											: "bg-gray-500"
									}`}
								/>
							</div>
							<p>Role: {el.role}</p>
							{el.url && (
								<a
									href={el.url}
									target='_blank'
									className='text-blue-500 underline break-words'>
									URL: {el.url.replace(/^https?:\/\//, "")}
								</a>
							)}
							<p>Client: {el.client}</p>
							<p>Duration: {el.duration}</p>
							{el.starterDate && (
								<p>From: {el.starterDate.split("-").reverse().join(".")}</p>
							)}
							{el.date && <p>To: {el.date.split("-").reverse().join(".")}</p>}
						</div>

						{/* Funkcje projektu */}
						<div className='space-y-1'>
							<p className='text-xl font-medium'>Features</p>
							<p className='flex items-center gap-2'>
								DarkMode:
								<span
									className={`inline-block h-4 w-4 rounded-full ${
										el.darkMode ? "bg-green-500" : "bg-red-500"
									}`}
								/>
							</p>
							{el.supportedLanguages && (
								<p>Languages: {el.supportedLanguages.join(", ")}</p>
							)}
						</div>

						{/* Tech Stack */}
						{el?.techStack && (
							<div className='space-y-1'>
								<p className='text-xl font-medium'>Tech Stack</p>
								<div className='flex flex-wrap gap-2'>
									{el?.techStack?.map(id => (
										<TechIcon key={id} id={id} />
									))}
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}

export default WebsitePortfolioItemLayout;
