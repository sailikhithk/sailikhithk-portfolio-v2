import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Sai Likhith Kanuparthi",
  description:
    "Sr. Software Engineer, ML Infrastructure & AI Engineering at Airbnb. Building GenAI platforms and data labeling infrastructure at scale.",
  keywords: [
    "Sai Likhith Kanuparthi",
    "Airbnb",
    "ML Infrastructure",
    "GenAI",
    "Software Engineer",
    "Python",
    "LLM",
    "AI",
    "portfolio",
  ],
  authors: [{ name: "Sai Likhith Kanuparthi" }],
  openGraph: {
    title: "Sai Likhith Kanuparthi",
    description: "Sr. SWE ML Infrastructure at Airbnb",
    url: "https://sailikhithk.github.io",
    siteName: "Sai Likhith Kanuparthi",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body style={{ fontFamily: "var(--font-lato), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
