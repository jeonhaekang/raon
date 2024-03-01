"use client";

import clsx from "clsx";
import { motion, useAnimationControls, useScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const Header = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  const [isTop, setIsTop] = useState(true);

  const { scrollY } = useScroll();
  const controls = useAnimationControls();

  useEffect(() => {
    scrollY.on("change", (y) => setIsTop(!y));
  }, [scrollY]);

  useEffect(() => {
    const imageHight = imageRef.current?.height ?? 0;

    if (isTop) {
      controls.start({ transform: "scale(1)", height: `${imageHight}px` });
    } else {
      controls.start({ transform: "scale(0)", height: 0 });
    }
  }, [controls, isTop]);

  return (
    <header className={clsx("py-9 sticky top-0 bg-white", { "bg-white/50": !isTop })}>
      <div className="px-6 sm:px-12">
        <motion.div
          animate={controls}
          transition={{ duration: 0.5, ease: "circInOut" }}
          className={clsx("overflow-hidden w-fit origin-top-left mb-4")}
        >
          <a href="/">
            <Image src="/brandLogo.svg" alt="brand logo" ref={imageRef} width={400} height={90} />
          </a>
        </motion.div>

        <div className="flex justify-between pb-3 border-b border-black text-sm font-normal">
          <h1>RAON</h1>

          <a href="#" className="group flex">
            MENU
          </a>
        </div>
      </div>
    </header>
  );
};
