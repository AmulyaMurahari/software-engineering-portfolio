import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({ src: "./fonts/geist-latin.woff2", variable: "--font-geist-sans", display: "swap" });
const geistMono = localFont({ src: "./fonts/geist-mono-latin.woff2", variable: "--font-geist-mono", display: "swap" });

const title = "Amulya Murahari — Software Engineer";
const description = "Portfolio of Amulya Murahari, a software engineer building reliable full-stack systems, AI-assisted workflows, and cloud infrastructure.";

export const metadata: Metadata = {
  metadataBase: new URL("https://amulyamurahari.github.io"),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: "/",
    images: [{ url: "/og-blue.png", width: 1731, height: 909, alt: "Amulya Murahari — Software Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-blue.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
