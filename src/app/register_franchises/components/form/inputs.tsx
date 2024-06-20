import { forwardRef } from "react";

// Ckeditor
import { CKEditor } from "@ckeditor/ckeditor5-react";

// Interfaces
import { InputProps } from "./interfaces/IInput";
import { TextAreaProps } from "./interfaces/ITextArea";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ startComponent, endComponent, label, id, ...props }, ref) => {
    return (
      <div>
        {label ? (
          <label
            htmlFor={id}
            className="block mb-1 pl-1 text-[#666] text-[0.8rem] font-secondary"
          >
            {label}
          </label>
        ) : null}

        <div
          className={`flex h-10 items-center rounded-md border border-input bg-white text-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500`}
        >
          {startComponent}
          <input
            {...props}
            id={id}
            ref={ref}
            className="w-full px-2 py-0 border-none focus:outline-none focus:ring-0"
          />
          {endComponent}
        </div>
      </div>
    );
  },
);
Input.displayName = "Input";

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ maxLenght, characters, label, ...props }) => {
    return (
      <div>
        <div className="flex justify-between mb-1 pl-1 text-[#666] text-[0.8rem] font-secondary">
          <label className={`${characters > maxLenght ? "text-red-500" : ""}`}>
            {label}
          </label>

          <span
            className={`${characters > maxLenght ? "text-red-500" : ""}`}
          >{`${characters} de ${maxLenght} caracteres`}</span>
        </div>

        <CKEditor {...props} />
      </div>
    );
  },
);
TextArea.displayName = "TextArea";

export { Input, TextArea };
