import React from "react";

/**
 * Toggle_button component
 *
 * This component renders a toggle button with a checkbox input that can be toggled
 * between "Ativo" (Active) and "Desativo" (Inactive) states.
 *
 * @param {object} props - The component props
 * @param {any} props.checked - Boolean indicating whether the toggle is checked or not
 * @param {function} props.onChange - Function to handle changes when the toggle is clicked
 *
 * @returns {JSX.Element} The rendered component
 */

function Toggle_button({checked, onChange}:{checked:any, onChange: any}): React.JSX.Element{
    
    return(
        <React.Fragment>
            <label className="toggle-container" htmlFor='toggle-check'>
                        <input type="checkbox" 
                        id='toggle-check'
                        className="toggle-input" 
                        checked = {checked}
                        onChange={onChange}
                        />
                        <span className="toggle-slider">
                            {checked ? 'Ativo' : 'Desativo'}
                        </span>
            </label>
            <style jsx>{`
            label {
                display: block;
                margin-top: 10px;
                color: #666;
                font-family: var(--font_primary);
                font-size: 1.2rem;
            }
            
            .label_text{
                margin-top: 45px;
                padding-left: 0.5rem;
                margin-bottom: 0.2rem;
            }
            .toggle-container {
                display: block;
                position: relative;
                width: 90px;
                height: 22px;
                
            }
            .toggle-input {
                display: none;
            }
            .toggle-slider {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #f80000;
                border-radius: 15px;
                cursor: pointer;
                transition: 0.4s;

                text-transform: uppercase;
                color: white;
                font-size: 12px;
                align-items: center;
                align-content: center;
                text-align: right;
                padding-right: 5px;
                padding-left: 12px;
            }
            .toggle-slider:before {
                content: "";
                position: absolute;
                width: 19px;
                height: 19px;
                left: 2px;
                bottom: 2px;
                background-color: white;
                border-radius: 50%;
                transition: 0.4s;
            }
            .toggle-input:checked + .toggle-slider {
                background-color: var(--color_sencodary);
                text-align: left;
            }
            .toggle-input:checked + .toggle-slider:before {
                transform: translateX(59px);
                left: 12px;
            }
                            
                `}</style>
        </React.Fragment>
    );
};


export default Toggle_button;