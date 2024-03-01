"use client";

import { GlobalNav } from "@/components/shared";
import { PropsWithChildren } from "react";

export const Provider = ({ children }: PropsWithChildren) => {
  return <GlobalNav>{children}</GlobalNav>;
};
