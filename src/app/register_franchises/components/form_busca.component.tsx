import React from "react";
import Image from 'next/image';

const Form_busca = ({holder, message, label="", onChange, value}) => {

    return(
        <React.Fragment>
            <label htmlFor='txtBusca'>{label}</label>
            <div id="divBusca">
                <div className='busca_img'>
                    <Image   width={20} height={20} src="/img/form_franchise/lupa.png" alt="lupa busca" />
                </div>
                    
                    <input type="text" 
                            id="txtBusca" 
                            placeholder={holder} 
                            name='txtBusca' 
                            autoComplete='on' 
                            list='textBusca_sugestion'
                            onChange={onChange}
                            value={value}
                    />
                    <button id="btnBusca">Buscar</button>

                    <datalist
                            className="w-60 my-2 rounded-md bg-PASTEL p-2 border-none" id='textBusca_sugestion'>
                            <option value="">Busque seu modelo</option>
                            <option value="Quiosque">Quiosque</option>
                            <option value="Loja fisica">Loja fisica</option>
                            <option value="Home based">Home based</option>
                            <option value="Unidade Movies">Unidade Movies</option>
                            <option value="home office">home office</option>
                        </datalist>

            </div>

            <div className="segment-atribute-alert alert alert-primary" role="alert">
                {message}
            </div>

            <div className="w-8/12">

                        
                        
                        
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


export default Form_busca;