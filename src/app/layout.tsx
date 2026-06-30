import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-montserrat",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "FinScope | AI-Powered Financial Intelligence Platform",
  description:
    "Turn 50 pages of bank statements into one clear credit decision in under a minute. Automatically identify income patterns, cheque bounces, active loans, and generate a professional underwriting report.",
  keywords: [
    "fintech",
    "underwriting",
    "bank statement analysis",
    "credit risk assessment",
    "NBFC credit analysis",
    "automated credit decision",
  ],
  authors: [{ name: "FinScope Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} font-sans h-full scroll-smooth`}>
      <body className="min-h-full bg-white text-slate-700 antialiased flex flex-col">
        {children}
      </body>
    </html>
  );
}
