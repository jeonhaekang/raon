"use client";

import { PropsWithChildren } from "react";
import { useGlobalNav } from ".";

import { motion } from "framer-motion";

export const Content = ({ children }: PropsWithChildren) => {
  const { control } = useGlobalNav();

  return <motion.main {...control}>{children}</motion.main>;
};
