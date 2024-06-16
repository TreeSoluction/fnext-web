import React, { useState,useEffect } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


import IFormTextareaProps from '../components/interfaces/formTexteareaProps.interface'


/**
 * Form_textarea component
 *
 * This component renders a labeled textarea with a character counter and CKEditor for rich text editing.
 *
 * @param {IFormTextareaProps} props - The component props
 * @param {string} props.label - The label for the textarea
 * @param {string} props.id_div - The ID for the character counter div
 * @param {string} props.id_input - The ID for the input
 * @param {Function} props.onChange - The function to call when the input value changes
 * @param {number} props.characters - The current number of characters
 *
 * @returns {JSX.Element} The rendered component
 */

const Form_textarea: React.FC<IFormTextareaProps> = ({ label, id_div, id_input, onChange, characters} )=> {
   
  const maxLen: number = 300;
  const [alertCharactLevel, setAlertCharactLevel] = useState<string>(id_div);

    return (
      <React.Fragment>
        <div className="text_area_labels">
          <label className='label_text'>{label}</label>
          <div id={alertCharactLevel}><p>{characters} de {Number(maxLen)} caracteres</p></div>
        </div>
        <CKEditor
          editor={ClassicEditor}
          data="<p>Digite aqui...</p>"
          onReady={editor => {
            console.log('Editor está pronto!', editor);
          }}
          onChange={onChange}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
        <style jsx>{`
          label {
            display: block;
            margin-top: 10px;
            color: #666;
            font-family: var(--font_primary);
            font-size: 0.8rem;
          }
          .label_text {
            margin-top: 45px;
            padding-left: 0.5rem;
            margin-bottom: 0.2rem;
          }
          .text_area_labels {
            display: flex;
            justify-content: space-between;
          }
          .text_area_labels p {
            font-size: 0.7rem;
            color: rgb(158, 157, 157);
            padding-top: 48px;
            align-content: end;
            text-align: end;
            margin-bottom: 0;
          }
          .ck-editor__editable_inline {
            min-height: 160px !important;
          }

          .maxLenghtCharceters{
            color: red;
          }
        `}</style>
      </React.Fragment>
    );
};

export default Form_textarea;