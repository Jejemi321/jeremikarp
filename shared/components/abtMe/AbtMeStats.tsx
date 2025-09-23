// TODO leraned technology/projects done/godziny spedzone/lata/kursy/ilosc kaw
import { TrainingArray } from "@/shared/constant/const";
import SectionTitle from "../ui/SectionTitle";
import { PortfolioItems } from "@/shared/constant/PortfolioItems";
import AnimatedCounter from "../AnimatedCounter";
import { TechStackArray } from "@/shared/constant/TechStack";

type stats = {
	id: number;
	title: string;
	value: number;
	delay: number;
};
const startDate = new Date(2022, 0, 1); // January 1, 2022
const now = new Date();
const days = Math.floor(
	(now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
);
const hoursSpent = days * 4;
const coffeePerDay = days * 1.5;
const statsArray: stats[] = [
	{ id: 1, title: "Projects Done", value: PortfolioItems.length, delay: 0.25 },
	{ id: 2, title: "Godziny Spedzone", value: hoursSpent, delay: 0.5 },
	{
		id: 3,
		title: "Lata Doswiadczenia",
		value: now.getFullYear() - startDate.getFullYear(),
		delay: 0.75,
	},
	{ id: 4, title: "Kursy Ukończone", value: TrainingArray.length, delay: 1 },
	{ id: 5, title: "Ilość Kaw wypitych", value: coffeePerDay, delay: 1.25 },
	{
		id: 6,
		title: "Learned technology",
		value: TechStackArray.length,
		delay: 1.5,
	},
];

function AbtMeStats() {
	return (
		<>
			<SectionTitle>Stats</SectionTitle>
			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-2.5'>
				{statsArray.map(el => (
					<div className='text-center' key={el.id}>
						<p className='text-2xl font-medium leading-tight 2xl:text-3xl 4xl:text-5xl'>
							<AnimatedCounter to={el.value} delay={el.delay} />+
						</p>
						<p className='text-base font-medium md:font-normal md:text-sm 2xl:text-base 4xl:text-2xl opacity-90'>
							{el.title}
						</p>
					</div>
				))}
			</div>
		</>
	);
}

export default AbtMeStats;
