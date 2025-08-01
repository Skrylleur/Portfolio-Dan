import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
