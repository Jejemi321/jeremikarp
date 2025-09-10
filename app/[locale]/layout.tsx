import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Nav from "@/shared/components/Nav";
import Footer from "@/shared/components/Footer";
import { Toaster } from "sonner";

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;

	// Sprawdzenie czy język jest obsługiwany
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	return (
		<NextIntlClientProvider locale={locale}>
			<Toaster richColors position='top-center' />
			<Nav />
			{children}
			<Footer />
		</NextIntlClientProvider>
	);
}
