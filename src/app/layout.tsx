import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Forge Torrent",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${roboto_mono.className} bg-slate-300`} lang="tr">
      <body className="mx-auto h-full">
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
