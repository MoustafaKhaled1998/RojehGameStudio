import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const titleFont = localFont({
  src: "../../public/fonts/title-font.ttf",
  variable: "--font-title",
  display: "swap",
});

const bodyFont = localFont({
  src: "../../public/fonts/body-font.ttf",
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rojeh Games | Handcrafted Games, Heartfelt Adventures",
  description:
    "Welcome to Rojeh Games - an indie video game studio creating charming, hand-drawn games with a Nintendo-like philosophy. Beautiful art, cute characters, and heartwarming gameplay experiences.",
  keywords: [
    "indie games",
    "video games",
    "mobile games",
    "puzzle games",
    "casual games",
    "Rojeh Games",
    "hand-drawn games",
  ],
  authors: [{ name: "Rojeh Games" }],
  openGraph: {
    title: "Rojeh Games | Handcrafted Games, Heartfelt Adventures",
    description:
      "An indie video game studio creating charming, hand-drawn games with beautiful art and heartwarming gameplay.",
    url: "https://rojehgames.com",
    siteName: "Rojeh Games",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rojeh Games | Handcrafted Games, Heartfelt Adventures",
    description:
      "An indie video game studio creating charming, hand-drawn games with beautiful art and heartwarming gameplay.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${titleFont.variable} ${bodyFont.variable} font-[family-name:var(--font-body)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
