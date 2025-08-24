import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import { Header } from "@/components/dom/Header";
import "../globals.css";
import { ReactNode } from "react";
import { Layout } from "@/components/dom/Layout";
import Footer from "@/components/dom/Footer";
import { GlobalDialogs } from "@/components/dom/GlobalDialogs";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
interface LayoutProps {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <div>
        <Header />
        <Layout>
          {children}
          <GlobalDialogs />
        </Layout>
      </div>
      <Footer />
    </NextIntlClientProvider>
  );
}
