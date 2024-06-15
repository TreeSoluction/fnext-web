
import React, { useState, ChangeEvent} from 'react';

const Form_finances = ({}) => {
    return(
        <React.Fragment>
            <div >
                <div className="container-finance-info" > 
                    <div className="container-finance-info--item" >
                            <label htmlFor="franchise-finance-fatmed" className="label_text">Faturamento Médio Mensal</label>
        
        
                            <input type="text" id="franchise-finance-fatmed" name="franchise-finance-fatmed" placeholder="0,00"/>
                        </div>
        
                        <div className="container-finance-info--item">
                            <label htmlFor="franchise-finance-unit" className="label_text">Unidade no Brasil</label>
        
        
                            <input type="text" id="franchise-finance-unit" name="franchise-finance-unit"/>
                        </div>
        
                        <div className="container-finance-info--item">
                            <label htmlFor="franchise-finance-sede" className="label_text">Sede</label>
        
        
                            <input type="text" id="franchise-finance-sede" name="franchise-finance-sede" placeholder=""/>
                        </div>
        
                </div>
                    
                <div className="container-finance-info--item--finance_return">
                    <div className="container-finance-info--item" >
                        <label htmlFor="franchise-finance-investreturn-begin" className="label_text">Retorno de Investimento &#x24D8;</label>

                        <input type="text" id="franchise-finance-investreturn-begin" name="franchise-finance-investreturn-begin" placeholder=""/>
                    </div>
                    <div className="container-finance-info--item">
                        <label htmlFor="franchise-finance-investreturn-begin" className="label_text"> </label>
                         <input type="text" id="franchise-finance-investreturn-until" name="franchise-finance-investreturn-until" placeholder=""/>
                    </div>

                </div>
    

                </div>
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
                    input[type="text"]{
                        width: 100%;
                        padding: 10px;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                        box-sizing: border-box;
                    }
                    .container-finance-info{
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        margin-top: auto;
                        align-items: flex-end;
                    
                    }
                    .container-finance-info--item{
                        width: 30%;
                    
                    }
                    .container-finance-info--item--finance_return{
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: flex-start;
                        margin-top: auto;
                        align-items: flex-end;
                    }
                    #franchise-finance-investreturn-until{
                        margin-left: 2rem;
                    }
                
                `}</style>
        </React.Fragment>
    );
}

export default Form_finances;
