import NotFound from "@/shared/components/NotFound";

export default function PortfolioNotFound() {
	return (
		<NotFound
			redirectTo='/portfolio'
			titleKey='404Portfolio'
			redirectTextKey='RedirectingPortfolio'
		/>
	);
}
