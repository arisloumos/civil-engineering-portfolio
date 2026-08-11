import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // <-- Importing our new component

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "[YOUR NAME] | Civil Engineering Portfolio",
  description: "Portfolio and professional record of [YOUR NAME], Civil Engineering student.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-paper text-graphite selection:bg-blueprint selection:text-white antialiased min-h-screen flex flex-col`}
      >
        <Navbar /> {/* <-- The Navbar now sits at the top of the whole app */}
        {children}
      </body>
    </html>
  );
}