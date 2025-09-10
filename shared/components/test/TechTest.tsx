import { TechStackArray } from "@/shared/constant/TechStack";
import Image from "next/image";

function TechTest({ id }: { id: number }) {
	const tech = TechStackArray[id - 1];
	return (
		<div>
			<div key={tech.id} className='flex items-center gap-2 mb-2'>
				{tech.iconImg && (
					<span className='relative w-6 h-6'>
						<Image
							src={tech.iconImg}
							alt={tech.name}
							width={24}
							height={24}
							className='absolute inset-0 transition-opacity duration-300 opacity-100 dark:opacity-0'
						/>
						{tech.darkIconImg && (
							<Image
								src={tech.darkIconImg}
								width={24}
								height={24}
								alt={tech.name}
								className='absolute inset-0 transition-opacity duration-300 opacity-0 dark:opacity-100'
							/>
						)}
					</span>
				)}
				{tech.iconClass && <i className={`${tech.iconClass} text-2xl`} />}
				<span>{tech.name}</span>
			</div>
		</div>
	);
}

export default TechTest;
