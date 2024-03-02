import { Content, Footer, Header } from "@/components/shared";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Head from "next/head";
import "swiper/css";
import "swiper/css/pagination";
import "./globals.css";
import { Provider } from "./provider";

const notoSans = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RAON Online Co.,Ltd. | 株式会社ラオン",
  description: "株式会社RAON",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/yakuhanjp@4.0.1/dist/css/yakuhanjp.css" />
      </Head>

      <body>
        <Provider>
          <Header />

          <Content>{children}</Content>

          <Footer />
        </Provider>
      </body>
    </html>
  );
}
