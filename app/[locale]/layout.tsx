import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Nav from "@/shared/components/Nav";
import Footer from "@/shared/components/Footer";

export default function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	const { locale } = params;

	// Sprawdzenie czy język jest obsługiwany
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	return (
		<NextIntlClientProvider locale={locale}>
			<Nav />
			{children}
			<Footer />
		</NextIntlClientProvider>
	);
}
