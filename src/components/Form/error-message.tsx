import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

type ErrorMessageProps = {
    error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}

export default function ErrorMessage({ error }: ErrorMessageProps) {
    if (!error) return null;

    return (
        <p className="font-medium text-red-600">
            {String(error.message)}
        </p>
    );
}