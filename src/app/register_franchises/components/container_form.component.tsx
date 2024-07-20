import React from "react";



/**
 * Container_form component
 *
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the container
 * @param {string} props.title - The title to be displayed in the container
 * @returns {JSX.Element} The rendered component
 */

function Container_form({children, title}): React.JSX.Element{
    return (
        <React.Fragment>
        <div className="container_form" >
            <h2>{title}</h2>
             <hr/>

            {children}
        </div>
        <style jsx>{`
        .container_form {
                max-width: 600px;
                margin: 0 auto 2rem auto;
                padding: 20px;
                background-color: #fff;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
        .container_form hr{
            border-top: 0.1rem solid #ececec;
        }
    
        .container_form h2 {
            font-size: 1.4rem;
            color: var(--color_primary);
            margin-bottom: 20px;
        }
        `}</style>
        </React.Fragment>
    );
};

export default Container_form;