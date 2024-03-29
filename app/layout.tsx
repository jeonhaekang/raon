import { Content, Footer, Header } from "@/components/shared";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "swiper/css";
import "swiper/css/pagination";
import "./globals.css";
import { Provider } from "./provider";

const notoSans = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RAON Co.,Ltd. | 株式会社ラオン",
  description: "株式会社RAON",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <Provider>
          <Header />

          <Content>{children}</Content>

          <Footer />
        </Provider>
      </body>
    </html>
  );
}
