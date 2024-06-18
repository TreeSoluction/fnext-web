import React, { useState, ChangeEvent} from 'react';

const Form_confirm_button = ({onChange, onChangeCancel}) => {
    return (
        <React.Fragment>
               <div className='form_container_button'>
                <button type="button" className="btn btn-light" onClick={onChangeCancel} >Cancelar</button>
                <button type="button" className="btn btn-primary" onClick={onChange}>Salvar  </button>
            </div>
            <style>{
                `
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
                `    
                }</style>          
        </React.Fragment>
    );
}

export default Form_confirm_button;