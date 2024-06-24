import { HTMLAttributes, forwardRef } from "react";

const Divider = forwardRef<HTMLHRElement, HTMLAttributes<HTMLHRElement>>(
  ({ className, ...props }, ref) => {
    return (
      <hr
        ref={ref}
        className={`w-full h-[2px] bg-gray-200 border-0 my-4 ${className}`}
        {...props}
      />
    );
  },
);
Divider.displayName = "Divider";

export { Divider };
