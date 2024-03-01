import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

const sizeClass = {
  fix: "min-w-[350px]",
  full: "w-full",
} as const;

const colorClass = {
  black: "border-black text-black",
  white: "border-white text-white",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  description?: string;
  size?: keyof typeof sizeClass;
  color?: keyof typeof colorClass;
}

export const Button = ({ title, description, size = "full", color = "white" }: ButtonProps) => {
  return (
    <button className={clsx(`flex flex-col items-center p-[18px] border ${colorClass[color]} ${sizeClass[size]}`)}>
      <p className="text-4xl font-thin">{title}</p>

      {description && <p className="text-lg">{description}</p>}
    </button>
  );
};
