'use client';  // Adiciona este comentário no topo do arquivo

import React, { useState, ChangeEvent, useEffect } from 'react';


import Form_input_data from './form_input_data.component';
import Form_data_finances from './form_finace_data.component';
import Form_confirm_button from './button_add.component';

import IbusinessModel from '../interfaces/businessModel.interface';

const Form_data = ({onChangeSetData, segmentValue, onChangeCancel}) => {

    const [mainData_capitalInstallation_value, setMainData_capitalInstallation_value ] = useState<string>("");
    const [mainData_capitalInstallation__isFixed, setMainData_capitalInstallation__isFixed ] = useState<boolean>(false)

    const [mainData_workingCapital_value, setMainData_workingCapital_value ] = useState<string>("")
    const [mainData_workingCapital__isFixed, setMainData_workingCapital__isFixed ] = useState<boolean>(false)

    const [mainData_franchiseFee_value, setMainData_franchiseFee_value ] = useState<string>("")
    const [mainData_franchiseFee__isFixed, setMainData_franchiseFee__isFixed ] = useState<boolean>(false)

    const [technicalData_advertisingFee_value, setTechnicalData_advertisingFee_value ] = useState<string>("");
    const [technicalData_advertisingFee__isFixed, setTechnicalData_advertisingFee__isFixed ] = useState<boolean>(false)

    const [technicalData_royalties_value, setTechnicalData_royalties_value ] = useState<string>("");
    const [technicalData_royalties__isFixed, setTechnicalData_royalties__isFixed ] = useState<boolean>(false)

    const [technicalData_storeArea_from, setTechnicalData_storeArea_from ] = useState<string>("");
    const [technicalData_storeArea__until, setTechnicalData_storeArea__until ] = useState<string>("")
    const [technicalData_storeArea__doesNotContain, setTechnicalData_storeArea__doesNotContain ] = useState<boolean>(false)

    const [data, setData ] = useState<IbusinessModel>()

    useEffect(()=>{

        setData({
            businessModel: segmentValue,
            mainData:{
                capitalForInstallation: {
                    value: Number(mainData_capitalInstallation_value),
                    isFixed: mainData_capitalInstallation__isFixed
                },
                workingCapital: {
                    value: Number(mainData_workingCapital_value),
                    isFixed: mainData_workingCapital__isFixed
                },
                FranchiseFee: {
                    value: Number(mainData_franchiseFee_value),
                    isFixed: mainData_franchiseFee__isFixed
                }
            },
            technicalData:{
                advertisingFee: {
                    value: Number(technicalData_advertisingFee_value),
                    fixed: technicalData_advertisingFee__isFixed
                },
                royalties: {
                    value: Number(technicalData_royalties_value),
                    fixed: technicalData_royalties__isFixed
                }, 
                storeArea: {
                    from: Number(technicalData_storeArea_from),
                    until: Number(technicalData_storeArea__until),
                    DoesNotContain: technicalData_storeArea__doesNotContain
                }
            }
        })

        console.log(data)

    }, [mainData_capitalInstallation__isFixed, 
        mainData_capitalInstallation_value, 
        mainData_workingCapital_value,
        mainData_workingCapital__isFixed,
        mainData_franchiseFee_value,
        mainData_franchiseFee__isFixed, 
        technicalData_advertisingFee_value,
        technicalData_advertisingFee__isFixed,
        technicalData_royalties_value,
        technicalData_royalties__isFixed,
        technicalData_storeArea_from,
        technicalData_storeArea__until,
        technicalData_storeArea__doesNotContain
    ])

    const handle_mainData_capitalInstallation_value = (e: ChangeEvent<HTMLInputElement>) => {
        setMainData_capitalInstallation_value(e.target.value)

    }

    const handle_mainData_capitalInstallation__isFixed = (e: ChangeEvent<HTMLInputElement>) => {
        setMainData_capitalInstallation__isFixed(e.target.checked)

    }

    const handle_mainData_workingCapital_value = (e: ChangeEvent<HTMLInputElement>) => {
        setMainData_workingCapital_value(e.target.value)
    }

    const handle_mainData_workingCapital__isFixed = (e: ChangeEvent<HTMLInputElement>) => {
        setMainData_workingCapital__isFixed(e.target.checked)
    }

    const handle_mainData_franchiseFee_value = (e: ChangeEvent<HTMLInputElement>) => {
        setMainData_franchiseFee_value(e.target.value)
    }

    const handle_mainData_franchiseFee__isFixed = (e: ChangeEvent<HTMLInputElement>) => {
        setMainData_franchiseFee__isFixed(e.target.checked)
    }

    const handle_technicalData_advertisingFee_value = (e: ChangeEvent<HTMLInputElement>) => {
        setTechnicalData_advertisingFee_value(e.target.value)
    }

    const handle_technicalData_advertisingFee__isFixed = (e: ChangeEvent<HTMLInputElement>) => {
        setTechnicalData_advertisingFee__isFixed(e.target.checked)
    }
    const handle_technicalData_royalties_value = (e: ChangeEvent<HTMLInputElement>) => {
        setTechnicalData_royalties_value(e.target.value)
    }

    const handle_technicalData_royalties__isFixed = (e: ChangeEvent<HTMLInputElement>) => {
        setTechnicalData_royalties__isFixed(e.target.checked)
    }

    const handle_technicalData_storeArea_from = (e: ChangeEvent<HTMLInputElement>) => {
        setTechnicalData_storeArea_from(e.target.value)
    }
    const handle_technicalData_storeArea__until = (e: ChangeEvent<HTMLInputElement>) => {
        setTechnicalData_storeArea__until(e.target.value)
    }
    const handle_technicalData_storeArea__doesNotContain = (e: ChangeEvent<HTMLInputElement>) => {
        setTechnicalData_storeArea__doesNotContain(e.target.checked)
    }

    const set_json_data = () => {
        onChangeSetData(data)
    }



    return(
        <React.Fragment>
            <h3>Dados principais</h3>

             <Form_input_data 
                label='Capital para instalação' id="Capital_instalacao" 
                placeholder="0,00" 
                simble='R$'
                onChangeValue={handle_mainData_capitalInstallation_value}
                onChangeFixed={handle_mainData_capitalInstallation__isFixed}
                value={mainData_capitalInstallation_value}
                valueCheckbox={mainData_capitalInstallation__isFixed}
             />

             <Form_input_data 
                label='Capital de Giro' 
                id="capital_giro" 
                placeholder="0,00" simble='R$'
                onChangeValue={handle_mainData_workingCapital_value}
                onChangeFixed={handle_mainData_workingCapital__isFixed}
                value={mainData_workingCapital_value}
                valueCheckbox={mainData_workingCapital__isFixed}
            />
             <Form_input_data 
                label='Taxa de franquia' 
                id="taxa_franquia" 
                placeholder="0,00" 
                simble='R$'
                onChangeValue={handle_mainData_franchiseFee_value}
                onChangeFixed={handle_mainData_franchiseFee__isFixed}
                value={mainData_franchiseFee_value}
                valueCheckbox={mainData_franchiseFee__isFixed}
            />

             <h3>Dados Técnicos</h3>
             <hr />

                 <Form_data_finances
                    onChange_TechnicalData_advertisingFee_value = {handle_technicalData_advertisingFee_value}
                    onChange_TechnicalData_advertisingFee__isFixed = {handle_technicalData_advertisingFee__isFixed}
                    onChange_technicalData_royalties_value = {handle_technicalData_royalties_value}
                    onChange_technicalData_royalties__isFixed = {handle_technicalData_royalties__isFixed}
                    onChange_technicalData_storeArea_from = {handle_technicalData_storeArea_from}
                    onChange_technicalData_storeArea__until = {handle_technicalData_storeArea__until}
                    onChange_technicalData_storeArea__doesNotContain = {handle_technicalData_storeArea__doesNotContain}
                    
                    value_TechnicalData_advertisingFee_value = {technicalData_advertisingFee_value}
                    value_TechnicalData_advertisingFee__isFixed = {technicalData_advertisingFee__isFixed}
                    value_technicalData_royalties_value = {technicalData_royalties_value}
                    value_technicalData_royalties__isFixed = {technicalData_royalties__isFixed}
                    value_technicalData_storeArea_from = {technicalData_storeArea_from}
                    value_technicalData_storeArea__until = {technicalData_storeArea__until}
                    value_technicalData_storeArea__doesNotContain = {technicalData_storeArea__doesNotContain}
                />

             <Form_confirm_button
                onChange={set_json_data}
                onChangeCancel = {onChangeCancel}
                />

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