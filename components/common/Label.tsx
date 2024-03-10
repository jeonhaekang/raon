import { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export const Label = ({ required = false, children }: LabelProps) => {
  return (
    <label className="text-sm">
      {children} {required && <span className="text-red-500">*</span>}
    </label>
  );
};
