import type { Metadata } from "next";

import Footer from "../components/footer";
import NavBar from "../components/navbar";

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
    index: true,
    follow: true,
  },
};

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-white bg-[repeating-linear-gradient(45deg,var(--color-gray-100),var(--color-gray-100)_0.7px,white_0.7px,white_10px)] bg-fixed">
      <NavBar />
      {children}
      <Footer />
    </main>
  );
};

export default LandingPageLayout;
