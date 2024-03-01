"use client";

import { Button } from "@/components/common";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <section className="w-full">
        <div className="relative w-full pt-[125%] sm:pt-[75%]">
          <Image src="/main.jpg" alt="main image" fill={true} className="object-cover" />

          <div className="absolute overflow-hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="text-6xl font-extralight"
            >
              WELLNESS
              <br />
              DESIGN
            </motion.p>

            <motion.p
              initial={{ opacity: 0, translateY: "100%" }}
              animate={{ opacity: 1, translateY: "0" }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="font-medium"
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

      <section className="p-24">
        <p className="text-xs leading-6">
          マッシュグループの取り組みやお約束をご紹介します。
          私たちは、「私たちの発想を形にし、人々に幸せを届ける。」を企業理念に掲げています。
          遊び心のあるデザインも、カラダや地球にやさしい素材を選ぶことも、すべては
          “人々に心身ともに健康で、笑顔あふれる毎日を届けたい”という願いから。
        </p>
      </section>
    </div>
  );
}
