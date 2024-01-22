import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import InputMask from 'react-input-mask';

type InputDateProps = {
    label: string;
    getInputDateRegisterRef: () => UseFormRegisterReturn<"date">;
}

const InputDate = ({ label, getInputDateRegisterRef }: InputDateProps) => {
    const [inputMaskDate, setInputMaskDate] = React.useState<string>("");
    const inputDateRef = React.useRef<HTMLInputElement | null>(null);
    const inputDateRegisterRef = getInputDateRegisterRef();

    const updateInputMaskDate = (e) => {
        const dateMaskFormat = e.target.value.split("-").reverse().join("/");
        setInputMaskDate(dateMaskFormat)
    }

    const handleDateChange = (e) => {
        setInputMaskDate(e.target.value);
        const isValidDate = e.target.value.length == 10;

        if (isValidDate && inputDateRef.current) {
            const date = e.target.value.split("/").reverse().join("-");
            inputDateRef.current.value = date;
            debugger
        }
    }

    return (
        <div className="relative">
            <input
                className="mt-8 w-full border-0 border-b-2 border-BLACK focus:ring-0"
                type="date"
                {...inputDateRegisterRef}
                onChange={updateInputMaskDate}
                ref={(e) => {
                    inputDateRegisterRef.ref(e);
                    inputDateRef.current = e;
                }}
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
        className={props.className ?? 'mt-8 border-0 border-b-2 border-BLACK focus:ring-0'}
        type={props.type ?? 'text'}
        placeholder={props.label}
    />
))

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

export { InputDate, InputStyled, InputMasked }