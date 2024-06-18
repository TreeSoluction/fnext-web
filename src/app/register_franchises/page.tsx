"use client";
import { useState, ChangeEvent, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form_input from "./components/form_input.component";
import Form_textarea from "./components/form_textarea.component";
import Form_busca from "./components/form_busca.component";
import Form_logo from "./components/form_logo.component";
import Form_imgs from "./components/form_img.component";
import Form_video from "./components/form_video.component";
import Form_finances from "./components/form_finances.component";
import Form_confirm_button from "./components/form__confirme_button.component";
import Form_data from "./components/data/form_data.component";

import IbusinessModel from "./components/interfaces/businessModel.interface";
import { useForm } from "react-hook-form";
import { Container, FormContainer } from "./components/container";
import { StatusToggle } from "./components/toggle";
import { Input } from "./components/input";

export default function Franchise() {
  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      secondaryDescription: "",
      operatingSegment: "",
      operatingSegmentMessage: "",
      logoImg: "",
    },
  });

  const [switchState, setSwitchState] = useState<boolean>(true);
  const [nameState, setNameState] = useState<string>("");
  const [franchiseDescriptionFrist, setFranchiseDescriptionFrist] =
    useState<string>("");
  const [franchiseDescriptionSecond, setFranchiseDescriptionSecond] =
    useState<string>("");
  const [textClassCharacterCount, setTextClassCharacterCount] =
    useState<string>("words_counts_describe");

  const [operatingSegment, setOperationgSegment] = useState<string>("");
  const [operatingSegmentMessage, setOperationgSegmentMessage] =
    useState<string>("Nenhum Segmento adicionado");
  const [operatingSegmentMessageClass, setOperationgSegmentMessageClass] =
    useState<string>("alert alert-primary");
  const [operationList, setOperationList] = useState<string[]>([
    "Alimentação",
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
    "Bem-Estar Animal",
  ]);

  const [logoImg, setLogoImg] = useState<string>("");
  const [otherImg, setOtherImg] = useState<string[]>([]);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  //Videos
  const [videoURL, setVideoURL] = useState<string>("");
  const [websiteURL, setWebsiteURL] = useState<string>("");

  // Franchise Revenue
  const [monthlyRevenue, setMonthlyRevenue] = useState<string>("");
  const [unitinBrazil, setUnitinBrazil] = useState<string>("");
  const [headquarters, setHeadquarters] = useState<string>("");
  const [returnonInvestmenFrom, setReturnonInvestmenFrom] =
    useState<string>("");
  const [returnonInvestmenUntil, setReturnonInvestmenUntil] =
    useState<string>("");

  const [businessModel, setBusinessModel] = useState<IbusinessModel>();

  useEffect(() => {}, [textClassCharacterCount]);

  useEffect(() => {}, [
    franchiseDescriptionFrist,
    franchiseDescriptionSecond,
    videoURL,
    websiteURL,
    logoImg,
    otherImg,
  ]);

  useEffect(() => {}, [
    monthlyRevenue,
    unitinBrazil,
    headquarters,
    returnonInvestmenFrom,
    returnonInvestmenUntil,
  ]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSwitchState((s) => !s);
  };

  const handleOnNameState = (e: ChangeEvent<HTMLInputElement>) => {
    setNameState(e.target.value);
  };

  const handleOnfranchiseDescriptionFrist = (event: any, editor: any) => {
    if (franchiseDescriptionFrist.length <= 300) {
      const data = editor.getData();
      setFranchiseDescriptionFrist(data);
      setTextClassCharacterCount("words_counts_describe");
    } else {
      setTextClassCharacterCount("words_counts_describe maxLenghtCharceters");
    }
  };

  const handleOnfranchiseDescriptionSecond = (event: any, editor: any) => {
    if (franchiseDescriptionFrist.length <= 300) {
      const data = editor.getData();
      setFranchiseDescriptionSecond(data);
      setTextClassCharacterCount(" words_counts_describe");
    } else {
      setTextClassCharacterCount(" words_counts_describe maxLenghtCharceters");
    }
  };

  useEffect(() => {
    const list = operationList;

    if (operatingSegment.length === 0) {
      setOperationgSegmentMessage(`Nenhum Segmento adicionado`);
      setOperationgSegmentMessageClass("alert alert-primary");
    } else {
      if (list.indexOf(operatingSegment) !== -1) {
        setOperationgSegmentMessage(
          `O Segmento ${operatingSegment} selecionado é válido`
        );
        setOperationgSegmentMessageClass("alert alert-success");
      } else if (list.indexOf(operatingSegment) === -1) {
        setOperationgSegmentMessage(
          `O Segmento ${operatingSegment} selecionado é inválido, por favor verifique as opções listadas`
        );
        setOperationgSegmentMessageClass("alert alert-danger");
      }
    }
  }, [operatingSegment, operationList]);

  const handleOperatingSegment = (e: ChangeEvent<HTMLInputElement>) => {
    setOperationgSegment(e.target.value);
  };

  const HandleLogoImg = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size <= 2 * 1024 * 1024) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          setLogoImg(evt.target?.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        alert("O arquivo deve ser uma imagem em png ou jpg até 2MB.");
      }
    }
  };

  const handleFranchiseImgs = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newSelectedImages = Array.from(files);
      setSelectedImages(newSelectedImages);

      const newImageUrls = newSelectedImages.map((file) =>
        URL.createObjectURL(file)
      );
      setOtherImg(newImageUrls);
    }
  };

  const handleVideoUrl = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.includes("embed")) {
      setVideoURL(e.target.value);
    } else {
      const videoId = e.target.value.split("v=")[1].split("&list=")[0];
      setVideoURL(`https://www.youtube.com/embed/${videoId}`);
    }
  };

  const handleSiteUrl = (e: ChangeEvent<HTMLInputElement>) => {
    setWebsiteURL(e.target.value);
  };

  const handleFinanceInfo_monthlyRevenue = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setMonthlyRevenue(e.target.value);
  };

  const handleFinanceInfo_UnitinBrazil = (e: ChangeEvent<HTMLInputElement>) => {
    setUnitinBrazil(e.target.value);
  };

  const handleFinanceInfo_Headquarters = (e: ChangeEvent<HTMLInputElement>) => {
    setHeadquarters(e.target.value);
  };

  const handleFinanceInfo_returnonInvestmenFrom = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setReturnonInvestmenFrom(e.target.value);
  };

  const handleFinanceInfo_returnonInvestmenUntil = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setReturnonInvestmenUntil(e.target.value);
  };

  const handlebusinessModel = (model) => {
    setBusinessModel(model);
  };

  const onSubmit = (data: any) => {};

  return (
    <Container>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8"
      >
        <FormContainer
          title="Informações da Franquia"
          className="flex flex-col gap-2"
        >
          <StatusToggle
            id={"checked"}
            checked={switchState}
            onChange={handleOnChange}
          />

          <Input
            label="Nome da Franquia"
            id="franchiseName"
            placeholder="Digite o nome da franquia"
            onChange={handleOnNameState}
            value={nameState}
          />

          <Form_textarea
            label="Descreva a Franquia"
            id_div={textClassCharacterCount}
            id_input="describefranchise"
            onChange={handleOnfranchiseDescriptionFrist}
            characters={franchiseDescriptionFrist.length}
          />

          <Form_textarea
            label="Descrição da Franquia"
            id_div={textClassCharacterCount}
            id_input="franchiseDescription"
            onChange={handleOnfranchiseDescriptionSecond}
            characters={franchiseDescriptionSecond.length}
          />
        </FormContainer>

        <FormContainer title="Segmento de Atuação">
          <Form_busca
            holder="Buscar segmento de atuação"
            message={operatingSegmentMessage}
            onChange={handleOperatingSegment}
            value={operatingSegment}
            classValue={operatingSegmentMessageClass}
            segments={operationList}
          />
        </FormContainer>

        <FormContainer title="Logo">
          <Form_logo onChange={HandleLogoImg} imageSrc={logoImg} />
        </FormContainer>

        <FormContainer title="Imagens">
          <Form_imgs onChange={handleFranchiseImgs} value={otherImg} />
        </FormContainer>

        <FormContainer title="Vídeos">
          <Form_video
            onChangeVideo={handleVideoUrl}
            onChangeSite={handleSiteUrl}
            valueVideo={videoURL}
            valueSite={websiteURL}
          />
        </FormContainer>

        <FormContainer title="Informações Financeiras">
          <Form_finances
            onChangeMonthlyRevenue={handleFinanceInfo_monthlyRevenue}
            onChangeUnitinBrazil={handleFinanceInfo_UnitinBrazil}
            onChangeHeadquarters={handleFinanceInfo_Headquarters}
            onChangeReturnonInvestmenFrom={
              handleFinanceInfo_returnonInvestmenFrom
            }
            onChangeReturnonInvestmenUntil={
              handleFinanceInfo_returnonInvestmenUntil
            }
          />
        </FormContainer>

        <FormContainer title="Mdelos de negócios ">
          <div>
            <p>
              Por favor selecione as categorias de atuação de suas franquias e
              forneça as informações financeiras pertinentes a cada uma delas
            </p>
            <button type="button" className="btn btn-light">
              Adicionar Modelo
            </button>
          </div>
        </FormContainer>

        <Form_confirm_button />

        <FormContainer title="Dados Essenciais">
          <Form_busca
            holder="Buscar Modelo de negócio"
            message="Modelo de Negócio"
            label="Modelo de Negócio &#9432;"
            onChange={handleOperatingSegment}
            value={operatingSegment}
            classValue={operatingSegmentMessageClass}
            segments={operationList}
          />

          <Form_data onChangeSetData={handlebusinessModel} />
        </FormContainer>
      </form>
    </Container>
  );
}
