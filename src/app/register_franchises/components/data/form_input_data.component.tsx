import React, { useState, ChangeEvent} from 'react';

const Form_input_data = ({label, id, placeholder, 
                        simble="R$", onChangeValue, onChangeFixed, 
                        value, valueCheckbox}:
                        {label: string, id: string, placeholder: string, 
                        simble: string, onChangeValue: any, onChangeFixed: any
                        value: string, valueCheckbox: boolean}): React.JSX.Element =>{
    return(
        <React.Fragment >
            <div className='Form_container'> 
               
                    <div className='label_data_div'>
                         <label className="label_text"> {label} </label>
                         
                         <div className='checkbox_fixo_div'>
                            <input 
                                    type="checkbox" 
                                    id="fixo" 
                                    name="fixo" 
                                    value="fixo" 
                                    onChange={onChangeFixed} 
                                    checked={valueCheckbox}

                            />
                            <label htmlFor="fixo">Fixo</label>
                        </div>
                    </div>
                    
                
               
                <div className="input-group mb-3">
                    <input 
                            type="number" 
                            className="form-control" 
                            placeholder={placeholder} 
                            id={id} name={id} 
                            aria-label="Recipient's username" 
                            aria-describedby="basic-addon2"
                            onChange={onChangeValue}
                            value={value}
                            
                    />
                    <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">{simble}</span>
                    </div>
                </div>

            </div>
             
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
                            width: 70%;
                        }
                        
                        input[type="number"]{
                            width: 100px;
                            padding: 6px 12px 6px 12px;
                            border: 1px solid #ddd;
                            border-radius: 5px;
                        }
                        .Form_container{
                            width: 40%;
                        }

                        .label_data_div {
                            display: flex;
                            justify-content: space-between;
                          }

                        .checkbox_fixo_div{
                            display: flex;
                            justify-content: space-evenly;
                            align-items: flex-end;

                            font-size: clamp(1em, 1em + 1vw, 1.5em);
                            width: 30%;
                            padding: 0.4rem;
                          }
                          
                        input[type="checkbox"] {
                            transform: scale(0.5);
                        }

                        .checkbox_fixo_div label{
                            font-size: 0.75rem;
                            align-content: end;
                            text-align: end;
                            margin-bottom: 0;
                            color: var(--color_sencodary)
                        }
                    `}</style>
        </React.Fragment>
    )
}

export default Form_input_data;