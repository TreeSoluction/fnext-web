import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import InputMask from 'react-input-mask';

type InputDateProps = {
    label: string;
    getInputDateRegisterRef: () => UseFormRegisterReturn<"date">;
    setValueInputDate: (value: string) => void;
}

const InputDate = ({ label, getInputDateRegisterRef, setValueInputDate }: InputDateProps) => {
    const [inputMaskDate, setInputMaskDate] = React.useState<string>("");
    const inputDateRegisterRef = getInputDateRegisterRef();

    const updateInputMaskDate = (e) => {
        const dateMaskFormat = e.target.value.split("-").reverse().join("/");
        setInputMaskDate(dateMaskFormat)
    }

    const handleDateChange = (e) => {
        setInputMaskDate(e.target.value);
        const isValidDate = e.target.value.length == 10;

        if (isValidDate) {
            const date = e.target.value.split("/").reverse().join("-");
            setValueInputDate(date);
        }
    }

    return (
        <div className="relative">
            <input
                className="mt-8 w-full border-0 border-b-2 border-BLACK focus:ring-0"
                type="date"
                {...inputDateRegisterRef}
                onChange={updateInputMaskDate}
            />
            <InputMask
                mask="99/99/9999"
                type="text"
                maskChar={null}
                value={inputMaskDate}
                onChange={handleDateChange}
            >
                {() =>
                    <input
                        placeholder={label}
                        className="absolute left-0 bottom-0 border-0 border-b-2 border-BLACK focus:ring-0 right-20"
                        type="text"
                    />
                }
            </InputMask>
        </div>
    )
};


const InputStyled = React.forwardRef((props: any, ref) => (
    <input
        ref={ref}
        {...props}
        className={props.className ?? 'mt-2 w-full placeholder-slate-300 border-2 border-slate-300 rounded-md focus:ring-0'}
        type={props.type ?? 'text'}
        placeholder={props.label}
        minLength="8"
    />
))
InputStyled.displayName = "InputStyled";

const InputMasked = React.forwardRef((props: any, ref) => (
    <InputMask
        {...props}
        ref={ref}
        mask={props.mask}
        maskChar={null}
        className={props.className ?? "mt-8 border-0 border-b-2 border-BLACK focus:ring-0"}
        type="text"
        placeholder={props.label}
    />
))
InputMasked.displayName = "InputMasked";

export { InputDate, InputStyled, InputMasked }