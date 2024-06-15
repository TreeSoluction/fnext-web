
'use client';  // Adiciona este comentário no topo do arquivo

import React, { useState, ChangeEvent, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Imports do componentes necessários para as páginas
import Container from './components/container.component'
import Container_form from './components/container_form.component'
import Toggle_button from './components/toggle_button.component'
import Form_input from './components/form_input.component';
import Form_textarea from './components/form_textarea.component';
import Form_busca from './components/form_busca.component';
import Form_logo from './components/form_logo.component';
import Form_imgs from './components/form_img.component';
import Form_video from './components/form_video.component';
import Form_finances from './components/form_finances.component';
import Form_confirm_button from './components/form__confirme_button.component';
import Form_data from './components/data/form_data.component';

import IbusinessModel from './components/interfaces/businessModel.interface';

export default function Franchise() {

    const [switchState, setSwitchState] = useState<boolean>(true);
    const [nameState, setNameState] = useState<string>('');
    const [franchiseDescriptionFrist, setFranchiseDescriptionFrist] = useState<string>("");
    const [franchiseDescriptionSecond, setFranchiseDescriptionSecond] = useState<string>("");
    const [textClassCharacterCount, setTextClassCharacterCount]  = useState<string>("words_counts_describe");

    //Franchise images e Logos
    const [operatingSegment, setOperationgSegment] = useState<string>("");
    const [operatingSegmentMessage, setOperationgSegmentMessage] = useState<string>("");
    const [operatingSegmentMessageClass, setOperationgSegmentMessageClass] = useState<string>("");

    const [logoImg, setLogoImg] = useState<string>("");
    const [otherImg, setOtherImg] = useState<string>("");

    //Videos
    const [videoURL, setVideoURL] = useState<string>("");
    const [websiteURL, setWebsiteURL] = useState<string>("");

    // Franchise Revenue
    const [monthlyRevenue, setMonthlyRevenue] = useState<string>("");
    const [unitinBrazil, setUnitinBrazil] = useState<string>("");
    const [headquarters, setHeadquarters] = useState<string>("");
    const [returnonInvestmenFrom, setReturnonInvestmenFrom] = useState<string>("");
    const [returnonInvestmenUntil, setReturnonInvestmenUntil] = useState<string>("");

    const [businessModel, setBusinessModel] = useState<IbusinessModel>();

    useEffect(() => {
    }, [textClassCharacterCount]);


    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSwitchState(!switchState)
        console.log(switchState)
    }

    const handleOnNameState = (e: ChangeEvent<HTMLInputElement>) => {
        setNameState(e.target.value);
        console.log(nameState);
    }

    const handleOnfranchiseDescriptionFrist = ( event: any, editor: any) => {

        if(franchiseDescriptionFrist.length <= 300 ){
            const data = editor.getData();
            setFranchiseDescriptionFrist(data);
            setTextClassCharacterCount("words_counts_describe")
            console.log("FRIST: " + franchiseDescriptionFrist);
            }
        else{
            setTextClassCharacterCount("words_counts_describe maxLenghtCharceters")
        }
    }

    const handleOnfranchiseDescriptionSecond = (event: any, editor: any) => {

        if(franchiseDescriptionFrist.length <= 300 ){
            const data = editor.getData();
            setFranchiseDescriptionSecond(data);
            setTextClassCharacterCount(" words_counts_describe")
            console.log("SECOND " + franchiseDescriptionSecond);
        }
        else{
            setTextClassCharacterCount(" words_counts_describe maxLenghtCharceters")
        }
    }

    const handleOperatingSegment = (e: ChangeEvent<HTMLInputElement>) => {
        if(operatingSegment.length > 0){
            setOperationgSegment(e.target.value);

            console.log(operatingSegment)
        }
        else{

        }
    }
        


  return (
    <Container>
        <form action="/submit-franchise-info" method="post">
            <Container_form title="Informações da Franquia">
                 
                    <Toggle_button checked={switchState} onChange={handleOnChange} />

                    <Form_input label='Nome da Franquia' id="franchiseName" placeholder="Digite o nome da franquia" onChange={handleOnNameState} value={nameState}/>

                    <Form_textarea label="Descreva a Franquia" 
                            id_div={textClassCharacterCount} id_input='describefranchise' 
                            onChange={handleOnfranchiseDescriptionFrist} 
                            characters={franchiseDescriptionFrist.length} 
                    />

                    <Form_textarea label="Descrição da Franquia" 
                            id_div={textClassCharacterCount} 
                            id_input='franchiseDescription' 
                            onChange={handleOnfranchiseDescriptionSecond} 
                            characters={franchiseDescriptionSecond.length} 
                    />

            </Container_form>

            <Container_form title='Segmento de Atuação'>
                <Form_busca holder="Buscar segmento de atuação" 
                            message="Nenhum Segmento adicionado" 

                            onChange={handleOperatingSegment} 
                            value={operatingSegment}
                />
            </Container_form>

            <Container_form title='Logo'>
                    <Form_logo/>
            </Container_form>

            <Container_form title='Imagens'>
                    <Form_imgs/>
            </Container_form>

            <Container_form title='Vídeos'>
                <Form_video/>
            </Container_form>

            <Container_form title='Informações Financeiras'>
                <Form_finances/>
            </Container_form>

            <Container_form title='Mdelos de negócios '>
                <div>
                    <p>Por favor selecione as categorias de atuação de suas franquias e forneça as informações financeiras pertinentes a cada uma delas</p>
                    <button type="button" className="btn btn-light">Adicionar Modelo</button>
                </div>
            </Container_form>

            <Form_confirm_button/>

            <Container_form title='Dados Essenciais'>
                <Form_busca 
                        holder="Buscar Modelo de negócio" 
                        message="Modelo de Negócio" 
                        label="Modelo de Negócio &#9432;" 
                        onChange={handleOperatingSegment}
                        value = {operatingSegment}
                />
        
                <Form_data/>
            
            </Container_form>
        </form>
        
    </Container>
    );
}