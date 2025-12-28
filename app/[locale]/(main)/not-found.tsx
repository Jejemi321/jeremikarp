import NotFound from "@/shared/components/NotFound";

export default function HomeNotFound() {
	return (
		<NotFound
			redirectTo='/'
			titleKey='404Home'
			redirectTextKey='RedirectingHome'
		/>
	);
}
