import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import Navigation from "@/components/Navigation";
import GlobalFooter from "@/components/GlobalFooter";
import "./globals.css";

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
  display: "swap",
  weight: ["500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "NEOPROD — CREATIVE TECH STUDIO",
  description:
    "A live interactive experience designed to showcase advanced web design, real-time 3D environments, and cinematic storytelling in the browser.",
  keywords: ["interactive", "web design", "creative tech", "studio", "3D", "storytelling", "animations", "brutalist"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={epilogue.variable}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${epilogue.className} dot-grid flex flex-col min-h-screen`}>
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <GlobalFooter />
      </body>
    </html>
  );
}
