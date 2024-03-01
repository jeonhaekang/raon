import { Button } from "@/components/common";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <section className="w-full">
        <div className="relative w-full pt-[125%] sm:pt-[75%]">
          <Image src="/main.jpg" alt="main image" fill={true} className="object-cover" />
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

      <section className="bg-gray-500 w-full flex flex-col justify-center items-center p-24 gap-4">
        <Button color="black" title="MAGAZINE" description="MASH GROUP マガジン" />
        <Button size="fix" title="MAGAZINE" description="MASH GROUP マガジン" />
      </section>
    </div>
  );
}
