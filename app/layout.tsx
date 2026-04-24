import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Nano Banana — Premium Cosmic Juice",
  description:
    "Experience the future of hydration. Nano Banana delivers premium, space-grade banana juice crafted for the adventurous soul.",
  keywords: ["juice", "premium", "banana", "space", "nano", "cosmic"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className={`${outfit.className} noise`}>{children}</body>
    </html>
  );
}
