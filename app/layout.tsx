import type { Metadata } from "next";
import { MetadataRoute } from "next";

import { GeistMono } from "geist/font/mono";
import "../public/inter/inter.css";
import "./globals.scss";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Nigerian Sleep Society",
  description:
    "NSS (Nigerian Sleep Society) affiliated with the World Sleep Society is aimed at improving sleep care and enhancing sleep health to improve lives in Nigeria as part of a global effort.",
  openGraph: {
    title: "Nigerian Sleep Society",
    images: "https://nss.org.ng/og-image-home.png",
    description:
      "NSS (Nigerian Sleep Society) affiliated with the World Sleep Society is aimed at improving sleep care and enhancing sleep health to improve lives in Nigeria as part of a global effort.",
    url: "https://nss.org.ng",
    siteName: "Nigerian Sleep Society",
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
        disallow: ["/membership"],
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
