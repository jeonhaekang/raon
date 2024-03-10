"use client";

import { BroomIcon, FadeUp, HalfIcon, RumorIcon } from "@/components/common";
import { BrandSection, Section } from "@/components/sections";
import Image from "next/image";

const Brand = () => {
  return (
    <div>
      <Section>
        <FadeUp>
          <h2 className="text-xl text-center sm:text-left">ブランド・事業一覧</h2>
        </FadeUp>

        <FadeUp>
          <p className="pt-4 text-xs leading-5">
            マッシュグループが手掛けるファッションブランドは、ジャンルにとらわれることなく多種多様です。
            <br />
            みんなが同じ服を着なくていい。
            <br />
            誰かのためではなく、⾃分のために、⾃分が笑顔になれるものを着ればいい。
            <br />
            そんな想いで、明確なコンセプトのもと、個性の違うブランドが次々に⽣まれています。
            <br />
          </p>
        </FadeUp>

        <FadeUp>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10 mt-8">
            <div className="relative w-full pt-[50%] border border-black">
              <Image src={"/broom/broom_logo.svg"} alt="carousel" fill={true} />
            </div>

            <div className="relative w-full pt-[50%] border border-black">
              <Image src={"/half/half_logo.svg"} alt="carousel" fill={true} />
            </div>

            <div className="relative w-full pt-[50%] border border-black">
              <Image src={"/rumor/rumor_logo.svg"} alt="carousel" fill={true} />
            </div>
          </div>
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
};

export default Brand;
