import type { Metadata } from "next";
import "./globals.css";

import { Lato, Raleway } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-body",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Nitin Sharma | Software Engineer & B.Tech CSE Student",
  description:
    "Portfolio of Nitin Sharma — Software Engineer, B.Tech CSE Student, AWS Certified Cloud Practitioner. Skilled in JavaScript, Python, Java, and AWS.",
  keywords: [
    "Nitin Sharma",
    "Software Engineer",
    "Portfolio",
    "B.Tech CSE",
    "AWS",
    "JavaScript",
    "Python",
    "Java",
    "Full-Stack Developer",
  ],
  authors: [{ name: "Nitin Sharma" }],
  openGraph: {
    title: "Nitin Sharma | Software Engineer",
    description:
      "B.Tech CSE Student | 200+ DSA Problems Solved | AWS Certified Cloud Practitioner",
    type: "website",
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
        className={`${lato.variable} ${raleway.variable} font-body antialiased`}
        style={{ background: "#faf8f5", color: "#171717" }}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
