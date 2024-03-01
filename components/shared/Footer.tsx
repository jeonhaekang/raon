import clsx from "clsx";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className={clsx("flex flex-col items-center py-9 px-6 sm:px-12 bg-[#d2d2d2]")}>
      <Image src="/brandLogo.svg" width={232} height={50} alt="brand logo" />
    </footer>
  );
};
