import { HTMLAttributes, forwardRef } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className="flex flex-col justify-center items-center mt-6"
      >
        {children}
      </div>
    );
  },
);
Container.displayName = "Container";

interface FormContainerProps extends ContainerProps {
  title: string;
}

const FormContainer = forwardRef<HTMLDivElement, FormContainerProps>(
  ({ children, title, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={`max-w-2xl p-5 bg-white rounded-md shadow-[0_1px_12px_1px_rgba(0,0,0,0.2)] ${className}`}
      >
        <h2 className="text-2xl">{title}</h2>

        <hr className="w-full h-[2px] bg-gray-200 border-0 my-4" />

        {children}
      </div>
    );
  },
);
FormContainer.displayName = "FormContainer";

export { Container, FormContainer };
