"use client";
import { DragEvent, LegacyRef, forwardRef, useState } from "react";

// Ckeditor
import { CKEditor } from "@ckeditor/ckeditor5-react";

// Interfaces
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Camera } from "lucide-react";
import { ImageInputProps, InputProps } from "./interfaces/IInput";
import { TextAreaProps } from "./interfaces/ITextArea";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ startComponent, endComponent, label, id, className, ...props }, ref) => {
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
          className={`flex h-10 items-center rounded-md border border-input bg-white text-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 ${className}`}
        >
          {startComponent}
          <input
            {...props}
            id={id}
            ref={ref}
            className="w-full h-full px-2 py-0 rounded-md border-none focus:outline-none focus:ring-0"
          />
          {endComponent}
        </div>
      </div>
    );
  },
);
Input.displayName = "Input";

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ maxLength, characters, label, ...props }, ref) => {
    return (
      <div>
        <div className="flex justify-between mb-1 pl-1 text-[#666] text-[0.8rem] font-secondary">
          <label className={`${characters > maxLength ? "text-red-500" : ""}`}>
            {label}
          </label>

          <span
            className={`${characters > maxLength ? "text-red-500" : ""}`}
          >{`${characters} de ${maxLength} caracteres`}</span>
        </div>

        <CKEditor
          {...props}
          ref={ref as LegacyRef<CKEditor<ClassicEditor>> | undefined}
        />
      </div>
    );
  },
);
TextArea.displayName = "TextArea";

const InputImage = forwardRef<HTMLInputElement, ImageInputProps>(
  ({ onDrop, id, img, label, ...props }, ref) => {
    const [dragging, setDragging] = useState(false);

    const handleDragOver = (e: React.DragEvent<any>) => {
      e.preventDefault();
      setDragging(true);
    };

    const handleDragLeave = () => {
      setDragging(false);
    };

    const OnDrop = (e: DragEvent<HTMLInputElement>) => {
      setDragging(false);

      if (onDrop) {
        onDrop(e);
      }
    };

    return (
      <div className="flex flex-col font-secondary">
        <label className="text-right" htmlFor={id}>
          <span className="text-[#1031bd] cursor-pointer">{label}</span>

          <div
            className={`w-full h-[300px] mt-2 cursor-pointer rounded justify-center items-center
                ${dragging && !img ? "border-2 border-blue-500 border-solid" : img ? "" : "border-2 border-dashed"}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={OnDrop}
          >
            {img ? (
              <img
                src={img as string}
                alt="ImagemPreview"
                className="overflow-hidden w-full h-full object-cover"
              />
            ) : (
              <div className="flex flex-col gap-2 w-full h-full justify-center items-center pointer-events-none">
                <Camera size={42} />
                {dragging ? (
                  <span>Solte a imagem</span>
                ) : (
                  <span>Arraste as imagens aqui</span>
                )}
              </div>
            )}
          </div>
        </label>

        <input
          type="file"
          accept=".png, .jpg"
          {...props}
          ref={ref}
          id={id}
          className="hidden"
        />
      </div>
    );
  },
);
InputImage.displayName = "InputImage";

export { Input, InputImage, TextArea };
