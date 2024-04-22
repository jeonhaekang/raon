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
              Stakeholder
            </motion.p>

            <motion.p
              initial={{ opacity: 0, translateY: "100%" }}
              animate={{ opacity: 1, translateY: "0" }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-1 ml-1"
            >
              絡まる
            </motion.p>
          </div>

          <motion.a
            href="/about/intro"
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
        <FadeUp className="flex justify-center">
          <Image src="/logo.svg" alt="brand logo" width={60} height={300} />
        </FadeUp>

        <FadeUp>
          <p className="text-xs leading-6 mt-6">
            私たちと関係するすべての人々の人生にポジティブな変化と幸せをもたらすよう努力しています。 <br />
            “楽しみ”という意味を込めて、すべての人々が私たちのサービスを通じて日常生活で小さな喜びを見つけ、その楽しみが人生の質を向上させることを願っています。
            <br />
            ラオンは、顧客が直面する問題を解決し、彼らのニーズを満たすために絶えず研究し開発しています。
            <br />
            チームワークと協力を基盤として、すべてのステークホルダーが共に成長し発展できる環境を作っていきます。
          </p>
        </FadeUp>
      </Section>

      <BrandSection
        icon={<RumorIcon />}
        title="ルーマースプレッズ"
        imageUrl="/rumor/rumor_in.jpeg"
        logoUrl="/rumor/rumor_logo_fit.svg"
        linkUrl="/brand"
      />

      <BrandSection
        icon={<BroomIcon />}
        title="ビルームススタジオ"
        imageUrl="/broom/broom_in.jpeg"
        logoUrl="/broom/broom_logo_fit.svg"
        linkUrl="/brand"
      />

      <BrandSection
        icon={<HalfIcon />}
        title="二分の一"
        imageUrl="/half/half_out.jpeg"
        logoUrl="/logo.svg"
        linkUrl="/brand"
      />
    </div>
  );
}
