import { HTMLAttributes } from "react";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  bgColor?: string;
}

export const Section = ({ children, bgColor = "#FFFFFF", ...props }: SectionProps) => {
  return (
    <section {...props} className={`px-4 py-8 sm:px-8 sm:py-16 w-full bg-[${bgColor}]`}>
      <div className="max-w-[750px] w-full mx-auto">{children}</div>
    </section>
  );
};
