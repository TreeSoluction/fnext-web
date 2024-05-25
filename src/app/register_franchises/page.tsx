
'use client';  // Adiciona este comentário no topo do arquivo

import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Style } from '@ckeditor/ckeditor5-style';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';


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

function Togggle_button({title}:{title: string}): React.JSX.Element{
    return(
        <React.Fragment>
            <label className="toggle-container">
                        <input type="checkbox" className="toggle-input" checked/>
            <span className="toggle-slider">{title}</span>
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

function Form_input({label, id, placeholder}:{label: string, id: string, placeholder: string}): React.JSX.Element{
    return(
        <React.Fragment>
                    <label className="label_text">{label}</label>
                    <input type="text" id={id} name={id} placeholder={placeholder}/>

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


interface FormTextareaProps {
    label: string;
    id_div: string;
    id_input: string;
};

const Form_textarea: React.FC<FormTextareaProps> = ({ label, id_div, id_input }) => {
    const maxLen: string = "300";
    const [editorData, setEditorData] = useState("");

  
    return (
      <React.Fragment>
        <div className="text_area_labels">
          <label className="label_text">{label}</label>
          <div id={id_div}><p>0 de 300 caracteres</p></div>
        </div>
        <CKEditor
          editor={ClassicEditor}
          data="<p>Digite aqui...</p>"
          onReady={editor => {
            console.log('Editor está pronto!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            setEditorData(data);
            console.log({ event, editor, data });
          }}
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
        `}</style>
      </React.Fragment>
    );
};


const Form_busca = ({}) => {
    return(
        <React.Fragment>
            <div id="divBusca">
                <div className='busca_img'>
                    <Image   width={20} height={20} src="/img/form_franchise/lupa.png" alt="lupa busca" />
                </div>
        
                    <input type="text" id="txtBusca" placeholder="Buscar segmento de atuação"/>
                    <button id="btnBusca">Buscar</button>
            </div>

            <div className="segment-atribute-alert alert alert-primary" role="alert">
                Nenhum Segmento adicionado
            </div>

            <div className="w-8/12">
                        <p>Defina os modelos de negocios de sua franquia</p>
                        <select
                            className="w-60 my-2 rounded-md bg-PASTEL p-2 border-none"
                        >
                            <option value="">Busque seu modelo</option>
                            <option value="Quiosque">Quiosque</option>
                            <option value="Loja fisica">Loja fisica</option>
                            <option value="Home based">Home based</option>
                            <option value="Unidade Movies">Unidade Movies</option>
                            <option value="home office">home office</option>
                        </select>
                        
                    </div>
            <style jsx>{`

                    .segment-atribute-alert{
                        margin-top: 2rem;
                    }

                    #divBusca{

                        display: flex;
                        background-color:#ffffff;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                        width: 100%;
                        height:2.4remm;

                        box-sizing: border-box;
                    }

                    #txtBusca{

                        background-color:transparent;
                        padding-left:1rem;
                        font-size:18px;
                        border:none;
                        height:2.4rem;
                        width:80%;
                    }

                    #btnBusca{
                        border-left: 1px solid #ddd;
                        border-bottom: 1px solid #ddd;;
                        float: right;
                        width:20%;
                        height:2.4rem;
                        border-radius:0 7px 3.5px 0;

                        font-weight:bold;
                        background:#ffffff;
                        color: var(--color_text_secundary);

                    }
                    .busca_img{
                        margin: 10px;
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
}

export default function Franchise() {

const img_lupa = "fnext-web\public\img\form_francchise\lupa.png"
   
 /**  const [franchiseName, setFranchiseName] = useState('');
  const [franchiseDescription, setFranchiseDescription] = useState('');
  const [segmentSearch, setSegmentSearch] = useState('');
*/
  return (
    <Container>
        <form action="/submit-franchise-info" method="post">
            <Container_form title="Informações da Franquia">
                 
                    <Togggle_button title='ativo'/>

                    <Form_input label='Nome da Franquia' id="franchiseName" placeholder="Digite o nome da franquia"/>

                    <Form_textarea label="Descreva a Franquia" id_div='words_counts_describe' id_input='describefranchise' />

                    <Form_textarea label="Descrição da Franquia" id_div='words_counts_describe' id_input='franchiseDescription' />

            </Container_form>

            <Container_form title='Segmento de Atuação'>
                <Form_busca/>
            </Container_form>

            <Container_form title='Logo'>
               
                    <div className="image-upload-container">

                        <input className="custom-file-input" type="file" id="franchise_image--logo" accept=".png, .jpg" placeholder="insira sua imagem"/>

                        <label className="custom-file-label">Selecione sua Logo</label>
                        <div className="image-preview" id="preview_container--logo">
                        <span>Arraste as imagens aqui</span>
                        </div>
                        <p className="subtext_details">Imagem em png ou jpg até 2MB cada. Sugerimos dimensões de 250px X 150px.</p>
                    </div>
            </Container_form>

        </form>
    </Container>
    );
}