import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";
import { GTProvider } from "gt-next";
import { getGT } from "gt-next/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const gt = await getGT();
  const title = gt("Food Truck Finder | General Translation");
  const description = gt(
    "Discover local food trucks, browse menus, check schedules, and find your next favorite meal on wheels."
  );
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      locale,
      type: "website",
      siteName: "General Translation",
    },
    twitter: { card: "summary", title, description },
    alternates: {
      canonical: "https://food-truck-finder.generaltranslation.dev",
      languages: {
        en: "/en",
        es: "/es",
        fr: "/fr",
        ja: "/ja",
        zh: "/zh",
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body
        className={`${nunito.variable} ${inter.variable} font-[family-name:var(--font-inter)] antialiased`}
      >
        <GTProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </GTProvider>
      </body>
    </html>
  );
}
