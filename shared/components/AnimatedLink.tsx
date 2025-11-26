import { AnimatePresence, motion } from "framer-motion";
import { contactInfo, socialMedia } from "../types";

interface AnimatedLinkProps {
	el: contactInfo | socialMedia;
	Show: boolean;
}

export default function AnimatedLink({ el, Show }: AnimatedLinkProps) {
	// Typ strażnika: jeśli 'link' istnieje => socialMedia, jeśli 'typeHref' istnieje => contactInfo
	const isContactInfo = (el: contactInfo | socialMedia): el is contactInfo =>
		"typeHref" in el;

	const href = isContactInfo(el) ? `${el.typeHref}${el.value}` : el.link;

	const iconClass = isContactInfo(el) ? el.iconClass : el.icon;

	const displayText = Show
		? isContactInfo(el)
			? el.value
			: el.link.replace(/^https?:\/\/www./, "")
		: el.name;

	return (
		<a
			href={href}
			target='_blank'
			className='flex flex-col items-center justify-center space-x-2 transition hover:opacity-75'>
			<i className={`${iconClass} text-lg`}></i>
			<AnimatePresence mode='wait'>
				<motion.p
					key={displayText}
					initial={{ opacity: 0, y: 5 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -5 }}
					transition={{ duration: 0.25 }}>
					{displayText}
				</motion.p>
			</AnimatePresence>
		</a>
	);
}
