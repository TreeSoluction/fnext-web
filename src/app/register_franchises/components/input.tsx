import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, ...props }, ref) => {
    return (
      <div>
        <label
          htmlFor={id}
          className="block mb-1 pl-1 text-[#666] text-[0.8rem] font-secondary"
        >
          {label}
        </label>

        <input
          id={id}
          ref={ref}
          {...props}
          className="w-full p-2 border border-[#ddd] border-solid rounded"
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
