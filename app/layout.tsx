import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aurèle Martchouk | Economics & Social Policy Researcher | Financial Analyst",
  description: "Economics and Social Policy Researcher specializing in Innovation Economics, Social Dynamics, and Financial Markets. Currently pursuing Bachelor's degree in Economics and Societies at Sciences Po Paris.",
  keywords: ["Aurèle Martchouk", "Economics", "Social Policy", "Financial Analysis", "Econometrics", "Sciences Po Paris", "Research", "Investment Analysis"],
  authors: [{ name: "Aurèle Martchouk" }],
  openGraph: {
    title: "Aurèle Martchouk | Economics & Social Policy Researcher",
    description: "Economics and Social Policy Researcher specializing in Innovation Economics, Social Dynamics, and Financial Markets.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurèle Martchouk | Economics & Social Policy Researcher",
    description: "Economics and Social Policy Researcher specializing in Innovation Economics, Social Dynamics, and Financial Markets.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
