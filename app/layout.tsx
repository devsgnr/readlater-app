import type { Metadata } from "next";
import { MetadataRoute } from "next";

import { GeistMono } from "geist/font/mono";
import "../public/inter/inter.css";
import "./globals.css";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Readlater",
  description:
    "No more inbox overload. Forward or receive emails to your ReadLater address, keep them out of your main inbox, and let AI organize, summarize, and surface the important ones when you're ready.",
  openGraph: {
    title: "Readlater",
    images: "https://readlater.fyi/og-image-home.png",
    description:
      "No more inbox overload. Forward or receive emails to your ReadLater address, keep them out of your main inbox, and let AI organize, summarize, and surface the important ones when you're ready.",
    url: "https://readlater.fyi",
    siteName: "Readlater",
    type: "website",
    locale: "en-US",
  },
  icons: {
    icon: "/icon.ico",
    shortcut: "/icon.ico",
    apple: "/icon.ico",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: ["/"],
      },
    ],
    sitemap: "https://nss.org.ng/sitemap.xml",
  };
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={`${GeistMono.variable}`} suppressHydrationWarning>
      <body>
        <>{children}</>
      </body>
    </html>
  );
}
