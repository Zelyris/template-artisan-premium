import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.descriptor}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["ébénisterie", "mobilier sur mesure", "agencement", "artisan", "Nantes", "template de démonstration"],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  robots: { index: false, follow: false },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.descriptor}`,
    description: siteConfig.description,
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={siteConfig.locale}
      data-theme={siteConfig.theme}
      className="h-full antialiased"
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
