"use client";

import { FadeUp } from "@/components/common";
import { Section } from "@/components/sections";

const data = [
  {
    title: "2023",
    options: [
      "友達４人で株式会社RAON設立",
      "東京都新宿区新大久保にてセルフフォトスタジオ「B.RoomStudio」OPEN",
      "東京都新宿区新大久保にて韓国トレンド雑貨店「1/2」OPEN",
      "1/2の通販サイトを OPEN",
      "1/2　Nugu 出店",
    ],
  },
  {
    title: "2024",
    options: ["東京都世田谷区北沢にてセルフフォトスタジオ　「Rumor Spreads」OPEN"],
  },
];

const Profile = () => {
  return (
    <Section full>
      <FadeUp>
        <h2 className="text-xl text-center sm:text-left">沿革</h2>
      </FadeUp>

      {data.map(({ title, options }) => (
        <FadeUp key={title}>
          <p className="mt-4">{title}</p>

          {options.map((option) => (
            <p key={option} className="text-sm mt-4">
              ・ {option}
            </p>
          ))}
        </FadeUp>
      ))}
    </Section>
  );
};

export default Profile;
