import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

const size_values = {
    small: ' text-xs ',
    medium: ' text-sm ',
    large: ' text-base ',
}

type ErrorMessageProps = {
    error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
    size?: keyof typeof size_values;
    className?: string;
}

export default function ErrorMessage({ error, size = 'large', className = '' }: ErrorMessageProps) {
    if (!error) return null;

    return (
        <p className={`font-medium text-red-600 ${size_values[size]} ${className}`}>
            {String(error.message)}
        </p>
    );
}