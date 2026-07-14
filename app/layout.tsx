import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import { siteConfig } from "@/lib/data";
import { defaultLocale, type Locale } from "@/lib/i18n";
import { LocaleProvider } from "@/components/LocaleProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: `Portafolio de ${siteConfig.name} | Desarrollador de Software | ${siteConfig.alias}`,
  description: siteConfig.description,
  keywords: ["desarrollador", "fullstack", "software", "ingeniero", "web", "react", "nextjs", "portfolio", "mexico"],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `Portafolio de ${siteConfig.name} | Desarrollador de Software`,
    description: siteConfig.description,
    type: "website",
    locale: "es_MX",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("locale")?.value as Locale) || defaultLocale;

  return (
    <html lang={locale} className={`${montserrat.variable} h-full`}>
      <body className="min-h-full bg-[#0A0F1C] text-slate-300 antialiased font-sans">
        <LocaleProvider locale={locale}>
          <div className="relative min-h-screen">{children}</div>
        </LocaleProvider>
      </body>
    </html>
  );
}
