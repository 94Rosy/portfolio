import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.scss";
import localFont from "next/font/local";

const dohyeon = localFont({
  src: [
    {
      path: "../assets/fonts/BMDOHYEON_otf.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-dohyeon",
});

const kakao = localFont({
  src: [
    {
      path: "../assets/fonts/KakaoSmallSans-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/KakaoSmallSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/KakaoSmallSans-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-kakao",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "박소영의 Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${dohyeon.variable} ${kakao.variable}`}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
