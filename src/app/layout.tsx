import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} antialiased font-[family-name:var(--font-space-grotesk)] flex justify-center min-h-screen`}
      >
        <div className="max-w-[1200px] w-full">
          <Header />

          <div className="w-full py-1 px-6">{children}</div>
        </div>
      </body>
    </html>
  );
}
