"use client";

import { FadeUp } from "@/components/common";
import { Section } from "@/components/sections";

const About = () => {
  return (
    <Section>
      <FadeUp>
        <h2 className="text-xl text-center sm:text-left">ABOUT US</h2>

        <p className="text-center sm:text-left mt-2">マッシュグループについて</p>

        <p className="text-xs mt-6 leading-6">
          「私たちの発想を形にし、人々に幸せを届ける。」という企業理念、そして、人の24時間を豊かにし、笑顔を届ける「ウェルネスデザイン」の考えに則った企業です。
          <br />
          材料を選ぶ時、調達する時、商品をつくる時、提供する時。ものづくりの過程でウェルネスデザインに当てはまらないものがあれば、どんなに利益が出るビジネスだとしても決してやらない。それが、自分たちの誇りであり使命でもある、マッシュのビジネスモデルです。
        </p>

        <p className="text-xs mt-6 leading-6">
          1998年にグラフィックデザイン会社として設立。2005年にファッション事業へ参入して以降は、ビューティ、フード、スポーツなど幅広い業態に事業を拡大。国内のみならず、アジアを中心にアメリカなど世界へ事業を展開しています。
        </p>
      </FadeUp>
    </Section>
  );
};

export default About;
