"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import { useGlobalNav } from ".";

export const Footer = () => {
  const { control } = useGlobalNav();

  return (
    <motion.footer className={clsx("flex flex-col items-center py-9 px-6 sm:px-12 bg-[#d2d2d2]")} {...control}>
      <Image src="/logo.svg" width={232} height={50} alt="brand logo" />

      <div className="border-t my-6 w-full border-black" />

      <p className="text-[9px] mt-4">© RAON Co.,Ltd.</p>
    </motion.footer>
  );
};
