import React, { useState, ChangeEvent} from 'react';
import Form_input_data from './form_input_data.component';

import Form_data_finances from './form_finace_data.component';

const Form_data = ({}) => {
    return(
        <React.Fragment>
            <h3>Dados principais</h3>
             <Form_input_data label='Capital para instalação' id="Capital_instalacao" placeholder="0,00" simble='R$'/>
             <Form_input_data label='Capital de Giro' id="capital_giro" placeholder="0,00" simble='R$'/>
             <Form_input_data label='Taxa de franquia' id="taxa_franquia" placeholder="0,00" simble='R$'/>

             <h3>Dados Técnicos</h3>
             <hr />

             <Form_data_finances/>

             <style jsx>{
                `
                h3 {
                    font-size: 1.2rem;
                    color: var(--color_primary);
                    margin-bottom: 20px;
                    margin-top: 3rem;
                }
                `
             }
             </style>

        </React.Fragment>
    )
} 

export default Form_data;