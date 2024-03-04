"use client";

import { BroomIcon, Button, FadeUp, HalfIcon, RumorIcon } from "@/components/common";
import { BrandSection, Section } from "@/components/sections";
import { motion } from "framer-motion";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const carouselUrls = [
  "/broom/broom_in.jpeg",
  "/broom/broom_out.jpeg",
  "/half/half_in.jpeg",
  "/half/half_out.jpeg",
  "/rumor/rumor_in.jpeg",
  "/rumor/rumor_out.jpeg",
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full">
        <div className="relative w-full h-[100vh]">
          <Image src="/rumor/rumor_in.jpeg" alt="main image" fill={true} className="object-cover" priority />

          <div className="absolute overflow-hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="text-[12vw] leading-[10vw] sm:text-[8vw] sm:leading-[7vw] font-thin tracking-tighter"
            >
              WELLNESS
              <br />
              DESIGN
            </motion.p>

            <motion.p
              initial={{ opacity: 0, translateY: "100%" }}
              animate={{ opacity: 1, translateY: "0" }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-1"
            >
              世界を、笑顔に。
            </motion.p>
          </div>

          <motion.a
            initial={{ opacity: 0, translateX: "-50%", translateY: "100%" }}
            animate={{ opacity: 1, translateY: "0" }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="absolute bottom-10 left-1/2"
          >
            <Button width="fix" title="ABOUT US" description="ラオンについて" />
          </motion.a>
        </div>
      </section>

      <section className="w-full mt-4 sm:mt-8">
        <Swiper
          slidesPerView="auto"
          spaceBetween={20}
          modules={[Pagination]}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            640: {
              spaceBetween: 32,
            },
          }}
        >
          {[...carouselUrls, ...carouselUrls].map((url, index) => (
            <SwiperSlide key={`${url}_${index}`} style={{ width: "300px" }}>
              <div className="relative w-full pt-[50%]">
                <Image src={url} alt="carousel" fill={true} className="object-cover" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <Section>
        <FadeUp>
          <Image src="/logo.svg" alt="brand logo" width={400} height={90} />
        </FadeUp>

        <FadeUp>
          <h2 className="mt-6 sm:mt-8 text-center sm:text-left text-xl font-medium">コミットメント</h2>
        </FadeUp>

        <FadeUp>
          <p className="text-xs leading-6 mt-6">
            マッシュグループの取り組みやお約束をご紹介します
            <br />
            私たちは、「私たちの発想を形にし、人々に幸せを届ける。」を企業理念に掲げています。
            <br />
            遊び心のあるデザインも、カラダや地球にやさしい素材を選ぶことも、すべては
            <br />
            “人々に心身ともに健康で、笑顔あふれる毎日を届けたい”という願いから。
          </p>
        </FadeUp>

        <FadeUp>
          <p className="text-xs leading-6 mt-6">
            「ウェルネスデザイン」というコーポレートスローガンのもとで追求し続けているのは、
            <br />
            お客さま、取引先さま、スタッフ、そして社会に“笑顔を届けるための仕事をする”こと。
            <br />
            きめの細かいモノづくりの精神に、人々の24時間を豊かにしたいという想いを乗せて
            <br />
            ライフスタイルをデザインしていきます。
          </p>
        </FadeUp>

        <FadeUp className="flex justify-center">
          <Button width="fix" color="black" title="MAGAZINE" description="MASH GROUP マガジン" className="mt-8 " />
        </FadeUp>
      </Section>

      <BrandSection
        icon={<RumorIcon />}
        title="ルーマースプレッズ"
        description="ルーマー スプレッズの詳細情報"
        imageUrl="/rumor/rumor_in.jpeg"
        logoUrl="/rumor/rumor_logo_fit.svg"
        linkUrl="#"
      />

      <BrandSection
        icon={<BroomIcon />}
        title="ビルームススタジオ"
        imageUrl="/broom/broom_in.jpeg"
        description="ビルームススタジオの詳細情報"
        logoUrl="/broom/broom_logo_fit.svg"
        linkUrl="#"
        bgColor="#EFEFEF"
      />

      <BrandSection
        icon={<HalfIcon />}
        title="二分の一"
        imageUrl="/half/half_out.jpeg"
        description="二分の一の詳細情報"
        logoUrl="/logo.svg"
        linkUrl="#"
      />
    </div>
  );
}
