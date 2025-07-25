import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './components/Header'
import ContactProvider from './context/Context';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SS Auto Detailing",
  description: "A mockup app for SS Auto Detailing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-900 mt-[10vh]`}
      >
        <Header />
        <ContactProvider>
          {children}
        </ContactProvider>
        <div id="portal"></div>
      </body>
    </html>
  );
}
