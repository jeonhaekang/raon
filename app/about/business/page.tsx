"use client";

import { FadeUp } from "@/components/common";
import { Section } from "@/components/sections";

const About = () => {
  return (
    <Section full>
      <FadeUp>
        <h2 className="text-xl text-center sm:text-left">業務内容</h2>
      </FadeUp>

      <FadeUp>
        <p className="text-center sm:text-left mt-6">セルフフォトスタジオ</p>

        <p className="text-xs mt-2 leading-6">
          韓国発プリクラ、無人店舗で人件費を抑えサービス上向や宣伝にターゲティング可能
          遠隔操作対応とサーバー管理にて安定した環境のサービス提供
        </p>
      </FadeUp>

      <FadeUp>
        <p className="text-center sm:text-left mt-6">ファッション業界の展開</p>

        <p className="text-xs mt-2 leading-6">
          韓国流行りファッションを取り入れ、卸メーカーと工場とダイレクトにて連携し
          いち早く日本の市場へ商品を展開、工場と連携し卸業だけではなくオリジナル商品生産可能
        </p>
      </FadeUp>

      <FadeUp>
        <p className="text-center sm:text-left mt-6">店舗、ブランドのコンサルティング、ネット販売アドバイザー業務</p>

        <p className="text-xs mt-2 leading-6">
          photoshop , illustrator , CADなどを活用、店舗のOPENに関する ブランディング、インテリア、内装工事の計画
          <br />
          各種卸業者のコンタクト　、人材育成　、　広告パンフレット制作
          <br />
          ネット展開のサイト制作、サーバー管理
          <ul className="mt-2">
            {[
              '黒花堂　全般のコンサルティング, "・CAFÉ PLACE　TOKYO 全般のコンサルティング',
              "ナンマンホットドック　 全般のコンサルティング",
              "B.RoomStudio 全般をコントロールし弊社ブランドとしてOPEN",
              "1/2　TOKYO 全般をコントロールし弊社ブランドとしてOPEN",
              "1/2の通販サイトの 全般をコントロールしOPEN",
              "Rumor Spreads 全般をコントロールし弊社ブランドとしてOPEN",
            ].map((desc) => (
              <li key={desc}>・ {desc}</li>
            ))}
          </ul>
        </p>
      </FadeUp>
    </Section>
  );
};

export default About;
