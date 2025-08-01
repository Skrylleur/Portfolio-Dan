import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dan LAINE - Portfolio | BTS SIO SISR | Cybersécurité",
  description: "Portfolio de Dan LAINE, étudiant en BTS SIO SISR en alternance, recherchant une alternance en Licence STS Sécurité des Réseaux et Cybersécurité à Caen.",
  keywords: "Dan LAINE, BTS SIO, SISR, Cybersécurité, Alternance, Caen, Réseaux, Sécurité informatique",
  authors: [{ name: "Dan LAINE" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L71R55G845"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L71R55G845');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
