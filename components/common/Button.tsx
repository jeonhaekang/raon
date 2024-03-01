import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

const widthClass = {
  fix: "min-w-[350px]",
  full: "w-full",
} as const;

const colorClass = {
  black: "border-black text-black hover:text-white hover:bg-black",
  white: "border-white text-white hover:text-black hover:bg-white",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  description?: string;
  width?: keyof typeof widthClass;
  color?: keyof typeof colorClass;
}

export const Button = ({ title, description, width = "full", color = "white" }: ButtonProps) => {
  return (
    <button
      className={clsx(
        `flex flex-col items-center p-[12px] duration-1000 border ${colorClass[color]} ${widthClass[width]}`
      )}
    >
      <p className="text-4xl font-thin">{title}</p>

      {description && <p className="text-lg">{description}</p>}
    </button>
  );
};
