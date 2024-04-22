"use client";

import { BroomIcon, FadeUp, HalfIcon, InstagramIcon, RumorIcon, StoreIcon } from "@/components/common";
import { BrandSection, Section } from "@/components/sections";
import Image from "next/image";

const Brand = () => {
  return (
    <div>
      <Section>
        <FadeUp>
          <h2 className="text-xl text-center sm:text-left">ブランド一覧</h2>
        </FadeUp>

        <FadeUp>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10 mt-8">
            <a href="#rumor" className="relative w-full pt-[50%] border border-black">
              <Image src={"/rumor/rumor_logo.svg"} alt="carousel" fill={true} />
            </a>

            <a href="#broom" className="relative w-full pt-[50%] border border-black">
              <Image src={"/broom/broom_logo.svg"} alt="carousel" fill={true} />
            </a>

            <a href="#1/2" className="relative w-full pt-[50%] border border-black">
              <Image src={"/half/half_logo.svg"} alt="carousel" fill={true} />
            </a>
          </div>
        </FadeUp>
      </Section>

      <div id="rumor">
        <BrandSection
          icon={<RumorIcon width={170} />}
          title="Rumor Spreads"
          button={false}
          description={
            <div className="text-xs flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <dl className="flex">
                  <dt className="min-w-[80px]">OPEN日</dt>
                  <dd>2024年7月25日</dd>
                </dl>

                <dl className="flex">
                  <dt className="min-w-[80px]">営業時間</dt>
                  <dd>11:30-21:00</dd>
                </dl>

                <dl className="flex">
                  <dt className="min-w-[80px]">SNS</dt>
                  <dd>
                    <a href="https://www.instagram.com/rumorspreads.official/" target="_blank">
                      <InstagramIcon size={18} />
                    </a>
                  </dd>
                </dl>

                <dl className="flex">
                  <dt className="min-w-[80px]">住所</dt>
                  <dd>東京都世田谷区北沢2-14-13フタバビル2F</dd>
                </dl>
              </div>

              <p>・上から撮る（エレベーターショット）セルフフォトスタジオ、無人店舗 遠隔操作対応</p>
              <p>・QRコードより写真、動画ダウンロード可（無料）</p>
              <p>・サングラス貸出（無料）</p>
            </div>
          }
          imageUrl="/rumor/rumor_in.jpeg"
          logoUrl="/rumor/rumor_logo_fit.svg"
        />
      </div>

      <div id="broom">
        <BrandSection
          icon={<BroomIcon width={170} />}
          title="B.RoomStudio"
          description={
            <div className="text-xs flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <dl className="flex">
                  <dt className="min-w-[80px]">OPEN日</dt>
                  <dd>2023年4月29日</dd>
                </dl>

                <dl className="flex">
                  <dt className="min-w-[80px]">営業時間</dt>
                  <dd>11:00-21:00</dd>
                </dl>

                <dl className="flex">
                  <dt className="min-w-[80px]">SNS</dt>
                  <dd>
                    <a href="https://www.instagram.com/broomstudio_tokyo/" target="_blank">
                      <InstagramIcon size={18} />
                    </a>
                  </dd>
                </dl>

                <dl className="flex">
                  <dt className="min-w-[80px]">住所</dt>
                  <dd>東京都新宿区大久保1-13-1</dd>
                </dl>
              </div>

              <p>・ブルーネオン８ブースセルフフォトスタジオ、無人店舗 遠隔操作対応</p>
              <p>・QRコードより写真、動画ダウンロード可（無料）</p>
              <p>・サングラス、カチューシャ貸出、ヘアアイロン、ヘアドライヤー（無料）</p>
            </div>
          }
          imageUrl="/broom/broom_in.jpeg"
          logoUrl="/broom/broom_logo_fit.svg"
        />
      </div>

      <div id="1/2">
        <BrandSection
          icon={<HalfIcon width={170} />}
          title="二分の一"
          description={
            <div className="text-xs flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <dl className="flex">
                  <dt className="min-w-[80px]">OPEN日</dt>
                  <dd>2023年7月25日</dd>
                </dl>

                <dl className="flex">
                  <dt className="min-w-[80px]">営業時間</dt>
                  <dd>11:00-21:00</dd>
                </dl>

                <dl className="flex">
                  <dt className="min-w-[80px]">SNS</dt>
                  <dd className="flex gap-1">
                    <a href="https://www.instagram.com/okb1_13_1/" target="_blank">
                      <InstagramIcon size={18} />
                    </a>

                    <a href="https://1-half.com/" target="_blank">
                      <StoreIcon size={18} />
                    </a>
                  </dd>
                </dl>

                <dl className="flex">
                  <dt className="min-w-[80px]">住所</dt>
                  <dd>東京都新宿区大久保1-13-1</dd>
                </dl>
              </div>

              <p>・小さいけれど意味のある変化</p>
              <p>・韓国流行りファッションをいち早く取り扱うブランド</p>
              <p>・アパレル、アクセサリー、雑貨、インテリア、オリジナル商品など幅広い展開</p>
            </div>
          }
          imageUrl="/half/half_out.jpeg"
          logoUrl="/logo.svg"
        />
      </div>
    </div>
  );
};

export default Brand;
