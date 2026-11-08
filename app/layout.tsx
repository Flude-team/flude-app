import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flude account",
  description: "Sign in and manage your Flude API key",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
        <body>
          {/* UNDER-CONSTRUCTION-NOTICE */}
          <div className="flude-under-construction-banner" data-flude-notice="under-construction">
            Flude is under construction. Features, commands, limits and behavior described here may be incomplete or change without notice.
          </div>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
