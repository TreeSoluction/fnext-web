import React from "react";

/**
 * Form_confirm_button component
 *
 * This component renders a set of confirmation buttons ("Cancelar" and "Salvar") within a styled container.
 *
 * @returns {JSX.Element} The rendered component
 */

const Form_confirm_button = ({}) => {
  return (
    <React.Fragment>
      <div className="form_container_button">
        <button type="button" className="btn btn-light">
          Cancelar
        </button>
        <button type="button" className="btn btn-primary">
          Salvar{" "}
        </button>
      </div>
      <style>{`
                form{
                    max-width: 600px;
                }
                .form_container_button{
                    display: flex;
                    justify-content: flex-end;
                    gap: 10px; /* Opcional: adiciona espaço entre os botões */
                    margin: 5rem 0 5rem 0;
                }
                .form_container_button button{
                    width: 10rem;
                }
                `}</style>
    </React.Fragment>
  );
};

export default Form_confirm_button;
