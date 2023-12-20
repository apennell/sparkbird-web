import { Metadata } from "next";

import "./global.css";
import "./typography.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Sparkbird Works",
    default: "Sparkbird Works",
  },
  description:
    "Performant Web experiences driven by the principles of accessbility and sustainability.",
  metadataBase: new URL("https://sparkbird.works"),
  keywords: [
    "web",
    "accessibility",
    "sustainability",
    "performance",
    "software engineering",
    "frontend engineering",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
  ],
  authors: [
    {
      name: "Annie Pennell",
      url: "https://anniepennell.com",
    },
  ],
  creator: "Annie Pennell",
  // icons: [], TODO: add icons
  openGraph: {
    title: "Sparkbird Works",
    siteName: "Sparkbird Works",
    type: "website",
    locale: "en_US",
    url: "https://sparkbird.works",
    description:
      "Performant web experiences driven by the principles of accessbility and sustainability.",
    // images: [], TODO: add OG images
  },
  // manifest: "", TODO: add manifest - https://developer.mozilla.org/en-US/docs/Web/Manifest
  // verification: "", TODO?: add verification?
  // appleWebApp: "", TODO?: add appleWebApp?
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-us">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
