import { TextareaHTMLAttributes } from "react";

export const Textarea = (props: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return <textarea {...props} className={`outline-none border px-3 py-2 text-xs ${props.className}`} />;
};
