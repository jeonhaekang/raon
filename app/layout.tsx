import { Footer, Header } from "@/components/shared";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RAON Online Co.,Ltd. | 株式会社ラオン",
  description: "株式会社RAON",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
