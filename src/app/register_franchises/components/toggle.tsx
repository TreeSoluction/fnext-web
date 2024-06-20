import { ChangeEvent, forwardRef } from "react";

interface StatusToggleProps {
  id: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const StatusToggle = forwardRef<HTMLLabelElement, StatusToggleProps>(
  ({ id, checked, onChange }, ref) => {
    return (
      <div>
        <label
          ref={ref}
          className="relative inline-block w-32 h-8"
          htmlFor={id}
        >
          <input
            type="checkbox"
            className="sr-only peer"
            id={id}
            checked={checked}
            onChange={onChange}
          />
          <div
            className={`w-full h-full bg-red-500 rounded-full cursor-pointer transition-all duration-300 peer-checked:bg-blue-500 peer-checked:shadow-inner outline-none ring-2 ring-offset-2 
            ${checked ? "ring-blue-500" : "ring-red-500"}`}
          >
            <span
              className={`block w-8 h-8 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                checked ? "translate-x-24" : "translate-x-0"
              }`}
            ></span>
          </div>
          <span
            className={`absolute top-0 left-0 w-full h-full flex items-center justify-center text-white uppercase text-xs transition-all duration-300 ${
              checked ? "justify-end pr-12" : "justify-start pl-8"
            } select-none`}
          >
            {checked ? "Ativo" : "Desativo"}
          </span>
        </label>
      </div>
    );
  },
);

StatusToggle.displayName = "StatusToggle";

export { StatusToggle };
