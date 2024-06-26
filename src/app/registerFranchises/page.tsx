"use client";

import { ChangeEvent, useEffect, useState } from "react";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { boolean } from "zod";
import { Container, FormContainer } from "./components/container";
import { Input, InputImage, TextArea } from "./components/form/inputs";
import { StatusToggle } from "./components/form/toggle";
import { IbusinessModel } from "./components/interfaces/businessModel.interface";

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
    "Educação",
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
  const [otherImg, setOtherImg] = useState<string[]>([""]);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  //Videos
  const [videoURL, setVideoURL] = useState<string>("");
  const [validUrl, setValidUrl] = useState<boolean>(false);
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
    const data = editor.getData();
    setFranchiseDescriptionFrist(data);
  };

  const handleOnfranchiseDescriptionSecond = (event: any, editor: any) => {
    const data = editor.getData();
    setFranchiseDescriptionSecond(data);
  };

  useEffect(() => {
    const list = operationList;

    if (operatingSegment.length === 0) {
      setOperationgSegmentMessage(`Nenhum Segmento adicionado`);
      setOperationgSegmentMessageClass("alert alert-primary");
    } else {
      if (list.indexOf(operatingSegment) !== -1) {
        setOperationgSegmentMessage(
          `O Segmento ${operatingSegment} selecionado é válido`,
        );
        setOperationgSegmentMessageClass("alert alert-success");
      } else if (list.indexOf(operatingSegment) === -1) {
        setOperationgSegmentMessage(
          `O Segmento ${operatingSegment} selecionado é inválido, por favor verifique as opções listadas`,
        );
        setOperationgSegmentMessageClass("alert alert-danger");
      }
    }
  }, [operatingSegment, operationList]);

  const handleOperatingSegment = (e: ChangeEvent<HTMLInputElement>) => {
    setOperationgSegment(e.target.value);
  };

  const handleLogoImg = (e: ChangeEvent<HTMLInputElement>) => {
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

  const onDropImg = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];

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
    const file = e.target.files?.[0];
    if (file) {
      if (file.size <= 2 * 1024 * 1024 && otherImg.length <= 4) {
        const reader = new FileReader();

        reader.onload = (evt) => {
          setOtherImg((s) => [evt.target?.result as string, ...s]);
        };

        reader.readAsDataURL(file);
      } else {
        alert("O arquivo deve ser uma imagem em png ou jpg até 2MB.");
      }
    }
  };

  const onDropOtherImg = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];

    if (file) {
      if (file.size <= 2 * 1024 * 1024 && otherImg.length <= 4) {
        const reader = new FileReader();

        reader.onload = (evt) => {
          setOtherImg((s) => [evt.target?.result as string, ...s]);
        };

        reader.readAsDataURL(file);
      } else {
        alert("O arquivo deve ser uma imagem em png ou jpg até 2MB.");
      }
    }
  };

  const handleVideoUrl = (e: ChangeEvent<HTMLInputElement>) => {
    if (
      /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//.test(e.target.value)
    ) {
      setValidUrl(true);

      if (e.target.value.includes("embed")) {
        setVideoURL(e.target.value);
      } else {
        const videoId = e.target.value.split("v=")[1].split("&list=")[0];
        setVideoURL(`https://www.youtube.com/embed/${videoId}`);
      }

      return;
    }

    setValidUrl(false);
  };

  const handleSiteUrl = (e: ChangeEvent<HTMLInputElement>) => {
    setWebsiteURL(e.target.value);
  };

  const handleFinanceInfoMonthlyRevenue = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    setMonthlyRevenue(e.target.value);
  };

  const handleFinanceInfoUnitinBrazil = (e: ChangeEvent<HTMLInputElement>) => {
    setUnitinBrazil(e.target.value);
  };

  const handleFinanceInfoHeadquarters = (e: ChangeEvent<HTMLInputElement>) => {
    setHeadquarters(e.target.value);
  };

  const handleFinanceInfoReturnonInvestmenFrom = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    setReturnonInvestmenFrom(e.target.value);
  };

  const handleFinanceInfoReturnonInvestmenUntil = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    setReturnonInvestmenUntil(e.target.value);
  };

  const handlebusinessModel = (model) => {
    setBusinessModel(model);
  };

  const onSubmit = (a: any) => {
    const data = {
      ownerId: "",
      business: {
        sector: "",
        name: "",
        description: "",
        logo: "",
        images: [],
        videos: [],
        site: "",
        average_monthly_billing: 0,
        units_in_brazil: 0,
        headquarters: "",
        ROI_min: 0,
        ROI_max: 0,
      },
      models: [
        {
          name: "",
          capital_for_instalation: 0,
          capital_for_instalation_isFixed: false,
          working_capital: 0,
          working_capital_isFixed: false,
          franchise_fee: 0,
          franchise_fee_isFixed: false,
          marketing_fee: 0,
          marketing_fee_isFixed: false,
          has_store_area: false,
          store_area_min: 0,
          store_area_max: 0,
          royalties: 0,
          royalties_isFixed: boolean,
        },
      ],
    };
  };

  return (
    <Container>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8"
      >
        <FormContainer
          title="Informações da Franquia"
          className="flex flex-col gap-4"
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

          <TextArea
            maxLength={300}
            label="Descreva a Franquia"
            editor={ClassicEditor}
            onChange={handleOnfranchiseDescriptionFrist}
            id={"describefranchise"}
            characters={franchiseDescriptionFrist.length}
          />

          <TextArea
            maxLength={300}
            label="Descrição da Franquia"
            editor={ClassicEditor}
            id={"franchiseDescription"}
            onChange={handleOnfranchiseDescriptionSecond}
            characters={franchiseDescriptionSecond.length}
          />
        </FormContainer>

        <FormContainer
          title="Segmento de Atuação"
          className="flex flex-col gap-4"
        >
          <Input
            startComponent={<Search className="ml-2" />}
            endComponent={
              <>
                <button className="h-full w-1/5 border-l border-solid border-[#ddd]">
                  Buscar
                </button>
              </>
            }
            onChange={handleOperatingSegment}
            placeholder="Buscar segmento de atuação"
          />

          <div
            className={`segment-atribute-alert ${operatingSegmentMessageClass}`}
            role="alert"
          >
            {operatingSegmentMessage}
          </div>
        </FormContainer>

        <FormContainer title="Logo" className="flex flex-col gap-4">
          <div className="flex flex-col">
            <InputImage
              label="Selecione sua Logo"
              id="logo"
              img={logoImg}
              onChange={handleLogoImg}
              onDrop={onDropImg}
            />
            <span className="text-[0.6rem] text-[#9E9D9D] text-right mt-4">
              Imagem em png ou jpg até 2MB cada. Sugerimos dimensões de 250px X
              150px.
            </span>
          </div>
        </FormContainer>

        <FormContainer title="Imagens" className="flex flex-col gap-4">
          {otherImg.map((img, index) => (
            <div className="flex flex-col" key={index}>
              <InputImage
                onChange={handleFranchiseImgs}
                label="Selecione uma imagem"
                id={img === "" ? "firstImg" : String(index)}
                img={img}
                onDrop={onDropOtherImg}
              />

              <span className="text-[0.6rem] text-[#9E9D9D] text-right mt-4">
                Imagem em png ou jpg até 2MB cada. Sugerimos dimensões de 250px
                X 150px.
              </span>
            </div>
          ))}
        </FormContainer>

        <FormContainer title="Vídeos" className="flex flex-col gap-4">
          <Input
            onChange={handleVideoUrl}
            type="url"
            id="franchiseVideoUrl"
            placeholder="https://..."
            label={
              <>
                URL de vídeo sobre sua Franquia <span>(opcional) &#9432;</span>
              </>
            }
          />

          {videoURL && validUrl ? (
            <iframe
              src={videoURL}
              width={560}
              height={315}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
            />
          ) : null}

          <Input
            onChange={handleSiteUrl}
            type="url"
            placeholder="https://..."
            label={
              <>
                URL do site de sua Franquia<span>(opcional) &#x24D8;</span>
              </>
            }
            id="siteUrl"
          />
        </FormContainer>

        <FormContainer
          title="Informações Financeiras"
          className="flex flex-col gap-4"
        >
          <div className="flex flex-wrap justify-between mt-auto items-end">
            <div className="w-[30%]">
              <Input
                label="Faturamento Médio Mensal"
                type="number"
                id="franchiseFinanceFatmed"
                placeholder="0,00"
                onChange={handleFinanceInfoMonthlyRevenue}
              />
            </div>

            <div className="w-[30%]">
              <Input
                label="Unidade no Brasil"
                type="number"
                id="franchiseFinanceUnit"
                onChange={handleFinanceInfoHeadquarters}
              />
            </div>

            <div className="w-[30%]">
              <Input
                label="Sede"
                type="number"
                id="franchiseFinanceSede"
                onChange={handleFinanceInfoMonthlyRevenue}
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-between mt-auto items-end">
            <div className="w-[30%]">
              <Input
                label="Retorno de Investimento &#x24D8;"
                type="text"
                id="franchiseFinanceInvestreturnBegin"
                onChange={handleFinanceInfoReturnonInvestmenFrom}
              />
            </div>

            <div className="w-[30%]">
              <Input
                type="number"
                id="franchiseFinanceInvestreturnUntil"
                onChange={handleFinanceInfoReturnonInvestmenUntil}
              />
            </div>

            <div className="w-[30%]" />
          </div>
        </FormContainer>

        <FormContainer
          title="Modelos de negócios"
          className="flex flex-col gap-4"
        >
          <p className="text-zinc-600">
            Por favor selecione as categorias de atuação de suas franquias e
            forneça as informações financeiras pertinentes a cada uma delas
          </p>

          <button
            type="button"
            className="px-3 py-2 rounded text-white bg-[#007bff]"
          >
            Adicionar Modelo
          </button>
        </FormContainer>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="px-3 py-2 rounded bg-[#ececec] w-1/4"
          >
            Cancelar
          </button>
          <button
            type="button"
            className="px-3 py-2 rounded text-white bg-[#007bff] w-1/4"
          >
            Salvar
          </button>
        </div>

        <FormContainer title="Dados Essenciais" className="flex flex-col gap-4">
          <Input
            startComponent={<Search className="ml-2" />}
            endComponent={
              <>
                <button className="h-full w-1/5 border-l border-solid border-[#ddd]">
                  Buscar
                </button>
              </>
            }
            placeholder="Buscar Modelo de negócio"
            onChange={handleOperatingSegment}
            list="operation"
          />

          <datalist
            className="w-60 my-2 rounded-md bg-PASTEL p-2 border-none"
            id="operation"
          >
            {operationList.map((options, index) => (
              <option key={index} value={options}>
                {options}
              </option>
            ))}
          </datalist>

          <div
            className={`segment-atribute-alert ${operatingSegmentMessageClass}`}
            role="alert"
          >
            {operatingSegmentMessage}
          </div>

          <div>
            <h3 className="my-6 text-lg">Dados Principais</h3>

            <div className="flex flex-col gap-6">
              <div className="w-1/2 flex">
                <Input
                  label={
                    <div className="flex justify-between">
                      <span>Capital para instalação</span>

                      <div className="flex items-end justify-evenly gap-1">
                        <input
                          type="checkbox"
                          className="transform scale-50"
                          id="capitalForInstallationFixed"
                        />
                        <label
                          className="text-blue-600"
                          htmlFor="capitalForInstallationFixed"
                        >
                          Fixo
                        </label>
                      </div>
                    </div>
                  }
                  endComponent={
                    <div className="w-1/3 p-4 flex justify-center items-center border-l h-full">
                      R$
                    </div>
                  }
                  className="w-2/3"
                  id="capitalForInstallation"
                  placeholder="0,00"
                />
              </div>

              <div className="w-1/2 flex">
                <Input
                  label={
                    <div className="flex justify-between">
                      <span>Capital de Giro</span>

                      <div className="flex items-end justify-evenly gap-1">
                        <input
                          type="checkbox"
                          className="transform scale-50"
                          id="workingCapitalFixed"
                        />
                        <label
                          className="text-blue-600"
                          htmlFor="workingCapitalFixed"
                        >
                          Fixo
                        </label>
                      </div>
                    </div>
                  }
                  endComponent={
                    <div className="w-1/3 p-4 flex justify-center items-center border-l h-full">
                      R$
                    </div>
                  }
                  className="w-2/3"
                  id="workingCapital"
                  placeholder="0,00"
                />
              </div>

              <div className="w-1/2 flex">
                <Input
                  label={
                    <div className="flex justify-between">
                      <span>Taxa de franquia</span>

                      <div className="flex items-end justify-evenly gap-1">
                        <input
                          type="checkbox"
                          className="transform scale-50"
                          id="franchiseFeeFixed"
                        />
                        <label
                          className="text-blue-600"
                          htmlFor="franchiseFeeFixed"
                        >
                          Fixo
                        </label>
                      </div>
                    </div>
                  }
                  endComponent={
                    <div className="w-1/3 p-4 flex justify-center items-center border-l h-full">
                      R$
                    </div>
                  }
                  className="w-2/3"
                  id="franchiseFee"
                  placeholder="0,00"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="my-6 text-lg">Dados Técnicos</h3>

            <div className="flex flex-col  gap-6">
              <div className="flex justify-between gap-12">
                <div className="w-1/2 flex">
                  <Input
                    label={
                      <div className="flex justify-between">
                        <span>Taxa de Propaganda</span>

                        <div className="flex items-end justify-evenly gap-1">
                          <input
                            type="checkbox"
                            className="transform scale-50"
                            id="advertisingFeeFixed"
                          />
                          <label
                            className="text-blue-600"
                            htmlFor="advertisingFeeFixed"
                          >
                            Fixo
                          </label>
                        </div>
                      </div>
                    }
                    endComponent={
                      <div className="w-1/3 p-4 flex justify-center items-center border-l h-full">
                        %
                      </div>
                    }
                    className="w-2/3"
                    id="advertisingFee"
                    placeholder="0,00"
                  />
                </div>

                <div className="w-1/2 flex">
                  <Input
                    label={
                      <div className="flex justify-between">
                        <span>Royalties</span>

                        <div className="flex items-end justify-evenly gap-1">
                          <input
                            type="checkbox"
                            className="transform scale-50"
                            id="royaltiesFixed"
                          />
                          <label
                            className="text-blue-600"
                            htmlFor="royaltiesFixed"
                          >
                            Fixo
                          </label>
                        </div>
                      </div>
                    }
                    endComponent={
                      <div className="w-1/3 p-4 flex justify-center items-center border-l h-full">
                        %
                      </div>
                    }
                    className="w-2/3"
                    id="royalties"
                    placeholder="0,00"
                  />
                </div>
              </div>

              <div className="flex justify-between gap-12">
                <div className="w-1/2 flex">
                  <Input
                    label={
                      <div className="flex justify-between">
                        <span>Taxa de franquia</span>

                        <div className="flex items-end justify-evenly gap-1">
                          <input
                            type="checkbox"
                            className="transform scale-50"
                            id="storeAreaFixed"
                          />
                          <label
                            className="text-blue-600"
                            htmlFor="storeAreaFixed"
                          >
                            Fixo
                          </label>
                        </div>
                      </div>
                    }
                    endComponent={
                      <div className="w-1/3 p-4 flex justify-center items-center border-l h-full">
                        M²
                      </div>
                    }
                    className="w-2/3"
                    id="storeArea"
                    placeholder="0,00"
                  />
                </div>
                <div className="w-1/2 flex">
                  <Input
                    label={
                      <div className="flex justify-between">
                        <span></span>

                        <div className="flex items-end justify-evenly gap-1">
                          <input
                            type="checkbox"
                            className="transform scale-50"
                            id="storeAreaFixed"
                          />
                          <label
                            className="text-blue-600"
                            htmlFor="storeAreaFixed"
                          >
                            Não contém
                          </label>
                        </div>
                      </div>
                    }
                    endComponent={
                      <div className="w-1/3 p-4 flex justify-center items-center border-l h-full">
                        M²
                      </div>
                    }
                    className="w-2/3"
                    id="storeArea"
                    placeholder="0,00"
                  />
                </div>
              </div>
            </div>
          </div>
        </FormContainer>

        <div className="flex justify-end gap-4 mb-12">
          <button
            type="button"
            className="px-3 py-2 rounded bg-[#ececec] w-1/4"
          >
            Cancelar
          </button>
          <button
            type="button"
            className="px-3 py-2 rounded text-white bg-[#007bff] w-1/4"
          >
            Salvar
          </button>
        </div>
      </form>
    </Container>
  );
}
