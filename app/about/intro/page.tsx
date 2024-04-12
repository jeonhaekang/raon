"use client";

import { FadeUp } from "@/components/common";
import { Section } from "@/components/sections";

const About = () => {
  return (
    <Section full>
      <FadeUp>
        <h2 className="text-xl text-center sm:text-left">ABOUT US</h2>

        <p className="text-center sm:text-left mt-2">RAONについて</p>

        <p className="text-sm mt-6 leading-6">
          RAON(ラオン）は喜びと楽しみを追求するという純韓国語の意味を持ち、ひらがなさえ読めなかった時期に出会った4人の韓国人が12年間の関係を維持しながら共同で設立した会社です。
        </p>

        <p className="text-sm mt-6 leading-6">
          RAONの価値観と理念は、一般に人々の生活の質を向上させ、ポジティブな変化を追求し、持続可能な方法で社会的価値を生み出すことを目標としています。RAONは内部では社員の福利厚生と満足度を高めために心がけています。外部ではお客様の生活にポジティブな影響を与える商品やサービスを提供し、様々な形で活動をしています。
        </p>
      </FadeUp>
    </Section>
  );
};

export default About;
