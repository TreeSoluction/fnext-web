import { forwardRef } from "react";

// Ckeditor
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// Interfaces
import { TextAreaProps } from "./interfaces/ITextArea";
import { InputProps } from "./interfaces/IInput";

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
  }
);
TextArea.displayName = "TextArea";

export { Input, TextArea };
