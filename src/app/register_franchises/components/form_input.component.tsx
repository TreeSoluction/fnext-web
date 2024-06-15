import React from "react";


function Form_input({label, id, placeholder, onChange, value}:{label: string, id: string, placeholder: string, onChange: any, value: string}): React.JSX.Element{
    return(
        <React.Fragment>
                    <label className="label_text">{label}</label>
                    <input type="text" id={id} 
                            name={id} 
                            placeholder={placeholder}
                            onChange={onChange}
                            value={value}
                            />

                    <style jsx>{`
                        label {
                            display: block;
                            margin-top: 10px;
                            color: #666;
                            font-family: var(--font_primary);
                            font-size: 0.8rem;
                        }
                        
                        .label_text{
                            margin-top: 45px;
                            padding-left: 0.5rem;
                            margin-bottom: 0.2rem;
                        }
                        
                        input[type="text"]{
                            width: 100%;
                            padding: 10px;
                            border: 1px solid #ddd;
                            border-radius: 5px;
                            box-sizing: border-box;
                        }
                    `}</style>
        </React.Fragment>
    );
};

export default Form_input;