"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import { Section } from ".";
import { Button, FadeUp } from "../common";
import { SectionProps } from "./Section";

interface BrandSectionProps extends SectionProps {
  title: string;
  icon: ReactElement;
  imageUrl: string;
  description?: ReactElement;
  logoUrl: string;
  linkUrl?: string;
  button?: boolean;
  buttonText?: string;
}

export const BrandSection = ({
  title,
  icon,
  imageUrl,
  logoUrl,
  linkUrl,
  button = true,
  description,
  buttonText = "詳細を見る",
  ...sectionProps
}: BrandSectionProps) => {
  return (
    <Section {...sectionProps}>
      <FadeUp className="flex justify-center">{icon}</FadeUp>

      <FadeUp className="flex justify-center">
        <h2 className="mt-2 sm:mt-2 text-center sm:text-left text-xl font-medium">{title}</h2>
      </FadeUp>

      <FadeUp>
        <div className="flex flex-col sm:flex-row sm:items-end mt-6">
          <div className="relative bg-slate-400 sm:w-[60%] pt-[60%] sm:pt-[40%]">
            <Image src={imageUrl} alt="main image" fill={true} className="object-cover" />
          </div>

          <div className="mt-2 sm:ml-6 sm:w-[40%]">
            {description && description}

            {linkUrl && (
              <Link href={linkUrl} target="_blank">
                <Button color="black" description={buttonText} className="mt-6" />
              </Link>
            )}
          </div>
        </div>
      </FadeUp>
    </Section>
  );
};
