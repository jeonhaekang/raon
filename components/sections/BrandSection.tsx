import Image from "next/image";
import Link from "next/link";
import { Section } from ".";
import { Button, FadeUp } from "../common";
import { SectionProps } from "./Section";

interface BrandSectionProps extends SectionProps {
  title: string;
  description: string;
  logoUrl: string;
  linkUrl: string;
}

export const BrandSection = ({ title, description, logoUrl, linkUrl, ...sectionProps }: BrandSectionProps) => {
  return (
    <Section {...sectionProps}>
      <FadeUp>
        <Image src={logoUrl} alt="brand logo" width={400} height={90} />
      </FadeUp>

      <FadeUp>
        <h2 className="mt-6 sm:mt-8 text-center sm:text-left text-xl font-medium">{title}</h2>
      </FadeUp>

      <FadeUp>
        <div className="flex flex-col sm:flex-row sm:items-end mt-6">
          <div className="relative sm:w-[60%] pt-[60%] sm:pt-[30%]">
            <Image src="/main.jpg" alt="main image" fill={true} className="object-cover" />
          </div>

          <div className="mt-2 sm:ml-6 sm:w-[40%]">
            <p className="text-sm">{description}</p>

            <Link href={linkUrl} target="_blank">
              <Button color="black" description="求人を探す" className="mt-6" />
            </Link>
          </div>
        </div>
      </FadeUp>
    </Section>
  );
};
