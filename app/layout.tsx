import type { Metadata } from "next";
import { Montserrat, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/lib/data";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteConfig.fullName} | ${siteConfig.tagline.split("|")[0].trim()} | ${siteConfig.name}`,
  description: siteConfig.description,
  keywords: ["desarrollador", "fullstack", "software", "ingeniero", "web", "react", "nextjs", "portfolio"],
  authors: [{ name: siteConfig.fullName }],
  openGraph: {
    title: `Portafolio de ${siteConfig.fullName} | Desarrollador de Software`,
    description: siteConfig.description,
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
