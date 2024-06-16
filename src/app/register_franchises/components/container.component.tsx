import React from "react";


/**
 * Container component
 *
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the container
 * @returns {JSX.Element} The rendered component
 */
function Container({ children }: { children: React.ReactNode }): React.JSX.Element {
    return (
        <React.Fragment>
            <div className='container'>
                {children}
            </div>
            <style jsx>{`
                .container {
                    margin-top: 10rem;
                }
                input[type="file"]{
                    display: none;
                }
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
                
                input[type="text"],
                textarea, input[type='search'], input[type="url"]{
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    box-sizing: border-box;
                }
                .button-container {
                    text-align: right;
                    margin-top: 20px;
                }
                button {
                    padding: 10px 15px;
                    background-color: #5cb85c;
                    color: white;
                    border: none;
                    border-radius: 3px;
                    cursor: pointer;
                }
                /* Estilos adicionais */
            `}</style>
        </React.Fragment>
    );
};

export default Container