"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import { useGlobalNav } from ".";

export const Footer = () => {
  const { toggle, control } = useGlobalNav();

  return (
    <motion.footer className={clsx("flex flex-col items-center py-9 px-6 sm:px-12 bg-[#d2d2d2]")} {...control}>
      <Image src="/brandLogo.svg" width={232} height={50} alt="brand logo" />

      <div className="border-t my-6 w-full border-black" />

      <div className="flex flex-col gap-2 items-center">
        <p className="text-[10px]">OFFICIAL SNS</p>

        <Image src="/icons/instagram.svg" alt="instagram" width={24} height={24} />
      </div>

      <p className="text-[9px] mt-4">© LAON Co.,Ltd.</p>
    </motion.footer>
  );
};
