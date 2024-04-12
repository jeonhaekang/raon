import { HTMLAttributes } from "react";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  bgColor?: string;
  full?: boolean;
}

export const Section = ({ children, full, bgColor = "#FFFFFF", ...props }: SectionProps) => {
  return (
    <section {...props} className={`px-4 py-8 sm:px-8 sm:py-16 w-full bg-[${bgColor}] ${full && `min-h-[100vh]`}`}>
      <div className="max-w-[750px] w-full mx-auto">{children}</div>
    </section>
  );
};
