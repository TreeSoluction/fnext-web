
import React, { useState, ChangeEvent} from 'react';
import Image from 'next/image';


/**
 * Form_imgs component
 *
 * This component renders a file input for image uploads, a preview of the selected images, and additional instructions.
 *
 * @param {Object} props - The component props
 * @param {function} props.onChange - The function to call when the input value changes
 * @param {Array<string>} props.value - The current list of image URLs to display as previews
 *
 * @returns {JSX.Element} The rendered component
 */

const Form_imgs = ({onChange, value}) => {

    return(
        <React.Fragment>

            <div className="image-upload-container">

                <input 
                    className="custom-file-input" 
                    type="file" 
                    id="franchise_image--others" 
                    accept=".png, .jpg" 
                    multiple 
                    placeholder="insira sua imagem"
                    onChange={onChange}
                />

                <label className="custom-file-label"  htmlFor="franchise_image--others">Selecione imagens de sua franquia</label>
                <div className="image-preview" id="preview_container-others">
                    {
                        value.length>0? (
                            value.map((url, index) => (
                                <Image key={index} src={url} alt={`Imagem ${index}`} width={260} height={140} />
                            ))
                        ) : (
                            <span>Arraste as imagens aqui</span>
                        )
                    }
                
                </div>
                <p className="subtext_details">Imagem em png ou jpg até 2MB cada. Sugerimos dimensões de 250px X 150px.</p>
            </div>

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
            .image-upload-container {
                border: 1px none #ccc;
                padding: 10px;
                text-align: center;
            }
            .image-preview {
                display: flex;
                flex-wrap: wrap;
            
                width: 99%;
                min-height: 150px;
                max-height: 100%;
            
                margin-top: 0.2rem;
                border: 1px solid #ccc;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            input[type="file"]{
                display: none;
            }
            label {
                display: block;
                margin-top: 10px;
                color: #666;
                font-family: var(--font_primary);
                font-size: 0.8rem;
              }
            .custom-file-label {
    
                position: relative;
                border: none;
                background-color: transparent;
                cursor: pointer;
                color: var(--color_sencodary);
                text-align: right;
                item-align: right;
                font-size: 1rem;
                margin-bottom: 0.2rem;
            }
            .custom-file-label::after {
                display: none;
            }
            .subtext_details{
                font-size: 0.6rem;
                color: rgb(158, 157, 157);
                text-align: right;
                margin-top: 1rem;
                align-content: end;
                text-align: end;
                margin-bottom: 0;
            }
            
            
            `}</style>

        </React.Fragment>
    )
}

export default Form_imgs