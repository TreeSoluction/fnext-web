
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
    const [operatingSegmentMessage, setOperationgSegmentMessage] = useState<string>("Nenhum Segmento adicionado");
    const [operatingSegmentMessageClass, setOperationgSegmentMessageClass] = useState<string>("alert alert-primary");
    const [operationList, setOperationList] = useState<string[]>(
            [  "Alimentação",
            "Casa e Construção",
            "Comunicação,informática e eletrônicos",
            "educação",
            "Entretenimento e lazer",
            "Hotelaria e turismo",
            "Limpeza e conservação",
            "Moda",
            "Saúde e Beleza e bem estar",
            "Serviços Automotivos",
            "Serviço e outros negócios",
            "Imobiliário",
            "Finanças e Seguros",
            "Agricultura e Agroindústria",
            "Meio Ambiente",
            "Logística e Transporte",
            "Bem-Estar Animal"]
    )

    const [logoImg, setLogoImg] = useState<string>("");
    const [otherImg, setOtherImg] = useState<string[]>([]);
    const [selectedImages, setSelectedImages] = useState<File[]>([])

    //Videos
    const [videoURL, setVideoURL] = useState<string>("");
    const [websiteURL, setWebsiteURL] = useState<string>("");

    // Franchise Revenue
    const [monthlyRevenue, setMonthlyRevenue] = useState<string>("");
    const [unitinBrazil, setUnitinBrazil] = useState<string>("");
    const [headquarters, setHeadquarters] = useState<string>("");
    const [returnonInvestmenFrom, setReturnonInvestmenFrom] = useState<string>("");
    const [returnonInvestmenUntil, setReturnonInvestmenUntil] = useState<string>("");


    const [operatingSegmentEssencial, setOperationgSegmentEssencial] = useState<string>("");
    const [operatingSegmentMessageEssencial, setOperationgSegmentMessageEssencial] = useState<string>("Nenhum Segmento adicionado");
    const [operatingSegmentMessageClassEssencial, setOperationgSegmentMessageClassEssencial] = useState<string>("alert alert-primary");

    const [businessModel, setBusinessModel] = useState<IbusinessModel[]>();

    useEffect(() => {

    }, [textClassCharacterCount, 
        franchiseDescriptionFrist, 
        franchiseDescriptionSecond, 
        videoURL, websiteURL,  
        logoImg , otherImg,
        monthlyRevenue, 
        unitinBrazil, 
        headquarters, 
        returnonInvestmenFrom,  
        returnonInvestmenUntil,
        businessModel
    ]);

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

    useEffect(() => {

        const list = operationList;
        
        if(operatingSegment.length === 0){
            setOperationgSegmentMessage(`Nenhum Segmento adicionado`)
            setOperationgSegmentMessageClass("alert alert-primary")
        }
        else{
            if(list.indexOf(operatingSegment) !== -1){

                setOperationgSegmentMessage(`O Segmento ${operatingSegment} selecionado é válido`)
                setOperationgSegmentMessageClass("alert alert-success")
    
            }
            else if(list.indexOf(operatingSegment) === -1){
    
                setOperationgSegmentMessage(`O Segmento ${operatingSegment} selecionado é inválido, por favor verifique as opções listadas`)
                setOperationgSegmentMessageClass("alert alert-danger")
    
            }
        }
        
    }, [operatingSegment, operationList]);


    useEffect(() => {

        const list = operationList;
        
        if(operatingSegmentEssencial.length === 0){
            setOperationgSegmentMessageEssencial(`Nenhum Segmento adicionado`)
            setOperationgSegmentMessageClassEssencial("alert alert-primary")
        }
        else{
            if(list.indexOf(operatingSegmentEssencial) !== -1){

                setOperationgSegmentMessageEssencial(`O Segmento ${operatingSegmentEssencial} selecionado é válido`)
                setOperationgSegmentMessageClassEssencial("alert alert-success")
    
            }
            else if(list.indexOf(operatingSegmentEssencial) === -1){
    
                setOperationgSegmentMessageEssencial(`O Segmento ${operatingSegmentEssencial} selecionado é inválido, por favor verifique as opções listadas`)
                setOperationgSegmentMessageClassEssencial("alert alert-danger")
    
            }
        }
        
    }, [operatingSegmentEssencial, operationList]);

    
    const handleOperatingSegment = (e: ChangeEvent<HTMLInputElement>) => {
        setOperationgSegment(e.target.value);
    }

    const HandleLogoImg = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size <= 2 * 1024 * 1024) {
                const reader = new FileReader();
                reader.onload = (evt) => {
                    setLogoImg(evt.target?.result as string);
                    console.log(evt.target?.result as string)
                };
                reader.readAsDataURL(file);
            } else {
                alert('O arquivo deve ser uma imagem em png ou jpg até 2MB.');
            }
        }
    }

    const handleFranchiseImgs = (e: ChangeEvent<HTMLInputElement>) => {

        const files = e.target.files;
        if (files) {
            const newSelectedImages = Array.from(files);
            setSelectedImages(newSelectedImages);

            const newImageUrls = newSelectedImages.map((file) => URL.createObjectURL(file));
            setOtherImg(newImageUrls);
        }

    }
    
    const handleVideoUrl = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.includes('embed')) {
            setVideoURL(e.target.value);
            
        } else {
            const videoId = e.target.value.split('v=')[1].split('&list=')[0];
            setVideoURL(`https://www.youtube.com/embed/${videoId}`);
        }

        console.log("VIDEO URL : ", videoURL)
        
    }

    const handleSiteUrl = (e: ChangeEvent<HTMLInputElement>) => {
        setWebsiteURL(e.target.value);
        console.log("SITE : ", websiteURL)
    }

    const handleFinanceInfo_monthlyRevenue = ( e: ChangeEvent<HTMLInputElement> ) => {
        
        setMonthlyRevenue(e.target.value)
        console.log("MOTHLY: ", monthlyRevenue);
    }

    const handleFinanceInfo_UnitinBrazil = ( e: ChangeEvent<HTMLInputElement> ) => {
        
        setUnitinBrazil(e.target.value)
        console.log("UNIT: ", unitinBrazil); 
    }

    const handleFinanceInfo_Headquarters = ( e: ChangeEvent<HTMLInputElement> ) => {
        
        setHeadquarters(e.target.value)
        console.log("HEADQUARTER: ", headquarters);   
    }

    const handleFinanceInfo_returnonInvestmenFrom = ( e: ChangeEvent<HTMLInputElement> ) => {
        
        setReturnonInvestmenFrom(e.target.value)
        console.log("FROM RETURN: ", returnonInvestmenFrom); 
    }

    const handleFinanceInfo_returnonInvestmenUntil = ( e: ChangeEvent<HTMLInputElement> ) => {
        
        setReturnonInvestmenUntil(e.target.value)
        console.log("UNTIL: ", returnonInvestmenUntil); 
    }

    const handleOperatingSegmentEssencial = (e: ChangeEvent<HTMLInputElement>) => {
        setOperationgSegmentEssencial(e.target.value);
    }

    const handlebusinessModel = ( model ) => {
        setBusinessModel([model])
        console.log("THIS IS A BUSNESS MODEL: ", businessModel)
    }

  return (
    <Container>
        <form action="/submit-franchise-info" method="post">
            <Container_form title="Informações da Franquia">
                 
                    <Toggle_button checked={switchState} onChange={handleOnChange} />

                    <Form_input label='Nome da Franquia' id="franchiseName" placeholder="Digite o nome da franquia" onChange={handleOnNameState} value={nameState}/>

                    <Form_textarea label="Descreva a Franquia" 
                            id_div={textClassCharacterCount} 
                            id_input='describefranchise' 
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
                            message={operatingSegmentMessage}
                            onChange={handleOperatingSegment} 
                            value={operatingSegment}
                            classValue={operatingSegmentMessageClass}
                            segments={operationList}
                />

            </Container_form>

            <Container_form title='Logo'>
                    <Form_logo onChange={HandleLogoImg} imageSrc={logoImg}/>
            </Container_form>

            <Container_form title='Imagens'>
                    <Form_imgs onChange={handleFranchiseImgs} value={otherImg}/>
            </Container_form>

            <Container_form title='Vídeos'>
                <Form_video onChangeVideo={handleVideoUrl} onChangeSite={handleSiteUrl} valueVideo={videoURL} valueSite={websiteURL}/>
            </Container_form>

            <Container_form title='Informações Financeiras'>
                <Form_finances 
                        onChangeMonthlyRevenue={handleFinanceInfo_monthlyRevenue}
                        onChangeUnitinBrazil={handleFinanceInfo_UnitinBrazil}
                        onChangeHeadquarters={handleFinanceInfo_Headquarters}
                        onChangeReturnonInvestmenFrom={handleFinanceInfo_returnonInvestmenFrom}
                        onChangeReturnonInvestmenUntil={handleFinanceInfo_returnonInvestmenUntil}
                        />
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
                        message={operatingSegmentMessageEssencial}
                        label="Modelo de Negócio &#9432;" 
                        onChange={handleOperatingSegmentEssencial}
                        value = {operatingSegmentEssencial}
                        classValue={operatingSegmentMessageClassEssencial}
                        segments={operationList}
                />
        
                <Form_data 
                    onChangeSetData={handlebusinessModel}
                    segmentValue = {operatingSegmentEssencial}
                />
            
            </Container_form>
        </form>
        
    </Container>
    );
}