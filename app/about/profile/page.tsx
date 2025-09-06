"use client";

import { FadeUp } from "@/components/common";
import { Section } from "@/components/sections";

const data = [
  { title: "会社名", desc: "株式会社RAON" },
  { title: "本社所在地", desc: "東京都新宿区北山伏町２丁目２番 1階" },
  { title: "代表者", desc: "金熙錫(キム ヒソク)" },
  { title: "設立", desc: "令和５年２月７日" },
  { title: "資本金", desc: "金３００万円" },
  { title: "決算期", desc: "毎年３月" },
];

const Profile = () => {
  return (
    <Section full>
      <FadeUp>
        <h2 className="text-xl text-center sm:text-left">会社概要</h2>

        <table className="w-full border-collapse mt-8">
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="border p-2 bg-gray-50 text-sm">{item.title}</td>
                <td className="border p-2 text-sm">{item.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </FadeUp>
    </Section>
  );
};

export default Profile;
