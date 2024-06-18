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
        className="flex flex-col justify-center items-center mt-6 w-screen"
      >
        {children}
      </div>
    );
  }
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
        className={`max-w-2xl p-5 bg-white rounded-md shadow ${className}`}
      >
        <h2>{title}</h2>
        <hr className="border-t-[1.6px] border-[#0000001a]" />

        {children}
      </div>
    );
  }
);
FormContainer.displayName = "FormContainer";

export { Container, FormContainer };
