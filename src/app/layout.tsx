import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";

const manrope = localFont({
  src: [
    {
      path: "../../public/fonts/manrope.bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/manrope.semibold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/manrope.regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/manrope.thin.woff",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Web and mobile application design & development company in Bangladesh",
  description:
    "We are web & mobile app development company in Bangladesh. We will design your application that will meet your business needs. Our expert developer team is highly capable to work in diverse industries.",
  keywords: [
    // You can add these if SEO plugins require them
    "web development",
    "mobile app development",
    "software company",
    "Bangladesh",
    "custom app development",
    "PeopleNTech",
  ],
  metadataBase: new URL("https://peoplentech.net"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Web & Mobile application Development company - PeopleNTech",
    siteName: "peoplentech.net",
    description:
      "PeopleNTech is a USA based software development company. We provide top notch IT solutions for any kind of industry.",
    url: "https://peoplentech.net",
    images: [
      {
        url: "/uploads/extra_file/16640055925451Software%20development%20company%20Peoplentech.jpg",
        width: 768,
        height: 408,
        alt: "Custom web application Development services",
        type: "image/jpg",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/uploads/logo/16528576894621.png",
    apple: "/icon.png",
  },
  verification: {
    google: "cDWL_unIGr5RVyb7mh-6Sn4JDqAwIm-SW26L47owgEI",
    other: {
      "msvalidate.01": "00FFD5059D4CB414B6479EB5F38F56F4",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased`}
        suppressHydrationWarning
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
