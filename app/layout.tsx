import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/src/layout/Header";
import Footer from "@/src/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nugeninfo.com"),
  title: "Nugen Courses – Learn IT Skills Online | Nugen IT Services",
  description:
    "Explore industry-ready IT courses on Nugen Courses by Nugen IT Services. Learn web development, cloud computing, AI, and more with expert instructors.",
  keywords:
    "online IT courses, learn web development, cloud computing courses, AI training, Nugen courses, programming, tech education, Nugen IT Services",
  openGraph: {
    title: "Nugen Courses – Learn IT Skills Online",
    description:
      "Join Nugen Courses to upgrade your skills in web development, cloud computing, AI, and more. Powered by Nugen IT Services.",
    url: "https://www.nugeninfo.com",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nugen Courses - Online Learning Platform",
      },
    ],
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
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
