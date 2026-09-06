import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Home | C3",
    template: "%s | C3",
  },
  icons: {
    icon: [
      { url: "/C3.jpg" },
      { url: "/c3.jpg" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/C3.jpg",
    apple: "/C3.jpg",
  },
  description:
    "Chemist3 Labs engineers computational systems and exploratory hardware integration pipelines.",
  authors: [{ name: "Chemist3 Labs" }],
  openGraph: {
    title: "C3",
    description: "Chemist3 Labs",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "none",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white selection:bg-neutral-800 selection:text-white">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
