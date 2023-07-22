import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";

import { cn } from "@/lib/utils";

const fontDisplay = Rubik({
  subsets: ["latin"],
  variable: "--font-display",
});

const fontBody = Rubik({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen antialiased font-body",
          fontDisplay.variable,
          fontBody.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
