import { InputHTMLAttributes } from "react";

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <input className="outline-none border px-3 py-2 text-xs" {...props} />;
};
