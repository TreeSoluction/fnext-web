
import React from 'react';
import Input_data_values from './input_data_values.component';
import Form_confirm_button from './button_add.component';

const Form_data_finances = ({}) => {
    return(
        <React.Fragment>
            <div className='input_finace_data_form_container' >
                <div className="container-finance-info" > 

                 
                    <div className="container-finance-info--item" >
                         <Input_data_values label='Taxa de Propaganda' id="franchise-finance-fatmed" placeholder="0" simble='%'/>
                    </div>
        
                    <div className="container-finance-info--item">
                         <Input_data_values label='Royalties' id="franchise-finance-unit" placeholder="0" simble='%'/>
                    </div>
        
                </div>
                    
                <div className="container-finance-info--item--finance_return">
                    <div className='form_container_data'> 

                        <div className=''>
                            <label className="label_text"> Área da loja </label>
                        </div>



                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder='Apartir de' id='form_input_data--area_loja' name='area_loja' aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2">M²</span>
                            </div>
                        </div>
                    </div>



                    <div className='form_container_data form_container_data--until'> 
                        <div className='label_data_div'>
                            
                            <div className='checkbox_not_have_div'>
                                <input type="checkbox" id="not_have" name="fixo" value="not_have" />
                                <label htmlFor="not_have">Não contém</label>
                            </div>

                        </div>
                            <div className="input-group mb-3">
                                 <input type="text" className="form-control" placeholder='até' id='form_input_data--area_loja' name='area_loja' aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">M²</span>
                            </div>

                        </div>
                    </div>

                </div>

                </div>

                <Form_confirm_button/>
                <style jsx>{`
                    .input_finace_data_form_container{
                        width: 100%;
                    }
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
                        width: 70%;
                    }

                    input[type="text"]{
                        width: 100px;
                        padding: 6px 12px 6px 12px;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                    }

    
                    .form_container_data{
                        width: 47%;
                    }

                    .container-finance-info{
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        margin-top: auto;
                        align-items: flex-end;
                    
                    }
                    .container-finance-info--item{
                        width: 47%;
                    
                    }
                    .container-finance-info--item--finance_return{
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        margin-top: auto;
                        align-items: flex-end;
                    }
                    #franchise-finance-investreturn-until{
                        margin-left: 2rem;
                    }

                    .label_data_div {
                        display: flex;
                        justify-content: space-between;
                        width: 100%;
                        align-self: flex-end;
                        margin-left: 60%;
                      }

                    .checkbox_not_have_div{
                        display: flex;
                        justify-content: space-evenly;
                        align-items: flex-end;

                        font-size: clamp(1em, 1em + 1vw, 1.5em);
                        width: 50%;
                        padding: 0.4rem;
                      }
                      
                    input[type="checkbox"] {
                        transform: scale(0.5);
                    }

                    .checkbox_not_have_div label{
                        font-size: 0.75rem;
                        align-content: end;
                        text-align: end;
                        margin-bottom: 0;
                        color: var(--color_sencodary)
                    }
                    .form-control{
                        width: 20%;
                    }

                    .form_container_data--until{
                        display: block;
                    }
                
                `}</style>
        </React.Fragment>
    );
}

export default Form_data_finances;
