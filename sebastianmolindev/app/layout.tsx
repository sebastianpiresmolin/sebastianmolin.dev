import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Sebastian Molin",
  description: "Fullstack Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body className=" custom-scrollbar justify-center bg-black min-h-screen min-w-screen max-h-screen max-w-screen">
        {/* Fixad bakgrund för hela layouten */}
        <div className="fixed top-0 left-0 w-full h-full z-0">
          <Image
            className="object-cover"
            fill={true}
            src="/TerminalBlank.png"
            alt="Old Terminal Screen Background with Green Distinct Pixels."
          />
        </div>

        {/* Innehåll (children) */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
