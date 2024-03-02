import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

const widthClass = {
  fix: "max-w-[320px] min-w-[320px]",
  full: "w-full min-w-[280px]",
} as const;

const colorClass = {
  black: "border-black text-black sm:hover:text-white sm:hover:bg-black",
  white: "border-white text-white sm:hover:text-black sm:hover:bg-white",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  description?: string;
  width?: keyof typeof widthClass;
  color?: keyof typeof colorClass;
}

export const Button = ({ title, description, width = "full", color = "white", ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        `flex flex-col items-center p-[12px] duration-1000 border whitespace-nowrap ${colorClass[color]} ${widthClass[width]} ${props.className}`
      )}
    >
      <p className="text-4xl font-thin whitespace-nowrap">{title}</p>

      {description && <p>{description}</p>}
    </button>
  );
};
