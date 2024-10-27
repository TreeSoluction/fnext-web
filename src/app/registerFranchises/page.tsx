"use client";

import { ChangeEvent, Fragment, useContext, useEffect, useState } from "react";

import { AuthContext } from "@/contexts/auth.context";
import { CreateFranchises } from "@/services/Franchises/create.franchises";
import { ICreateFranchises, IModel } from "@/services/interfaces/IFranchises";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { Container, FormContainer } from "./components/container";
import {
  Input,
  InputImage,
  InputImages,
  TextArea,
} from "./components/form/inputs";

export default function Franchise() {
  const { owner } = useContext(AuthContext);

  const form = useForm({
    defaultValues: {},
  });

  const [models, setModels] = useState<any>([]);
  const [savedModels, setSavedModels] = useState<IModel[]>([]);

  const [nameState, setNameState] = useState<string>("");
  const [franchiseDescriptionFrist, setFranchiseDescriptionFrist] =
    useState<string>("");

  const [operatingSegment, setOperationgSegment] = useState<string>("");
  const [operatingSegmentMessage, setOperationgSegmentMessage] =
    useState<string>("Nenhum Segmento adicionado");
  const [operatingSegmentMessageClass, setOperationgSegmentMessageClass] =
    useState<string>("alert alert-primary");
  const [operationList] = useState<string[]>([
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
  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(0);
  const [headquarters, setHeadquarters] = useState<number>(0);
  const [returnonInvestmenFrom, setReturnonInvestmenFrom] = useState<number>(0);
  const [returnonInvestmenUntil, setReturnonInvestmenUntil] =
    useState<number>(0);

  const handleOnNameState = (e: ChangeEvent<HTMLInputElement>) => {
    setNameState(e.target.value);
  };

  const handleOnfranchiseDescriptionFrist = (event: any, editor: any) => {
    const data = editor.getData();
    setFranchiseDescriptionFrist(data);
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
    const request = async () => {
      if (file) {
        if (
          file.size <= 2 * 1024 * 1024 &&
          (file.type === "image/png" || file.type === "image/jpeg")
        ) {
          const reader = new FileReader();
          reader.onloadend = async () => {
            const base64String = reader.result as string;
            setLogoImg(base64String);
          };

          reader.readAsDataURL(file);
        } else {
          alert("The file must be a png or jpg image up to 2MB.");
        }
      }
    };
    request();
  };

  const onDropImg = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
  };

  const handleFranchiseImgs = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      if (otherImg.length + files.length <= 4) {
        Array.from(files).forEach((file) => {
          if (file.size <= 2 * 1024 * 1024) {
            const reader = new FileReader();
            reader.onloadend = async () => {
              const base64String = reader.result as string;
              setOtherImg((prevImgs) => [...prevImgs, base64String]);
            };

            reader.readAsDataURL(file);
          } else {
            alert(
              `O arquivo ${file.name} deve ser uma imagem em png ou jpg até 2MB.`,
            );
          }
        });
      } else {
        alert("Você pode adicionar até 4 imagens.");
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
    setMonthlyRevenue(Number(e.target.value));
  };

  const handleFinanceInfoHeadquarters = (e: ChangeEvent<HTMLInputElement>) => {
    setHeadquarters(Number(e.target.value));
  };

  const handleFinanceInfoReturnonInvestmenFrom = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    setReturnonInvestmenFrom(Number(e.target.value));
  };

  const handleFinanceInfoReturnonInvestmenUntil = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    setReturnonInvestmenUntil(Number(e.target.value));
  };

  const addModel = () => {
    setModels((s) => [
      ...s,
      {
        id: models.length + 1,
        name: "",
        capital_for_instalation: 0,
        capital_for_instalation_isFixed: false,
        working_capital: 0,
        working_capital_isFixed: false,
        franchise_fee: 0,
        franchise_fee_isFixed: false,
        marketing_fee: 0,
        marketing_fee_isFixed: false,
        royalties: 0,
        royalties_isFixed: false,
        has_store_area: false,
        store_area_min: 0,
        store_area_max: 0,
      },
    ]);
  };

  const removeModel = (id: string) => {
    setModels(models.filter((model) => model.id !== id));
  };

  const saveModel = (id: string) => {
    // TODO: ADICIONAR VALIDAÇÃO ANTES DE ADICIONAR O MODEL AO CARD

    setSavedModels((s) => [...s, models.filter((model) => model.id === id)[0]]);
    setModels(models.filter((model) => model.id !== id));
  };

  const onSubmit = (a: any) => {
    const data: ICreateFranchises = {
      ownerID: owner.id,
      Business: {
        ...form.getValues(),
        sector: operatingSegment,
        name: nameState,
        description: franchiseDescriptionFrist,
        images: otherImg,
        logo: logoImg,
        videos: videoURL,
        site: websiteURL,
        average_monthly_billing: monthlyRevenue,
        units_in_brazil: headquarters,
        headquarters: franchiseDescriptionFrist,
        ROI_min: returnonInvestmenFrom,
        ROI_max: returnonInvestmenUntil,
      },
      Models: savedModels.map(({ id, ...model }) => model),
    };

    // TODO: Adicionar tratamento de erro e redirecionamento caso sucesso
    CreateFranchises(data)
      .then((res) => {})
      .catch((err) => {});
  };

  return (
    <div className="bg-[#EAE9E9] h-full pb-32 top-0">
      <Container>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-8"
        >
          <FormContainer
            title="Informações da Franquia"
            className="flex flex-col gap-4"
          >
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
              {logoImg ? (
                <div className="flex flex-col items-center">
                  <img
                    src={logoImg}
                    alt="Logo Preview"
                    className="mb-4"
                    style={{ maxWidth: "250px", maxHeight: "150px" }}
                  />
                  <button
                    onClick={() => setLogoImg(null)}
                    className="mt-2 text-red-500"
                  >
                    Remove Logo
                  </button>
                </div>
              ) : (
                <>
                  <InputImage
                    label="Selecione sua Logo"
                    id="logo"
                    img={logoImg}
                    onChange={handleLogoImg}
                    onDrop={onDropImg}
                  />
                  <span className="text-[0.6rem] text-[#9E9D9D] text-right mt-4">
                    Imagem em png ou jpg até 2MB cada. Sugerimos dimensões de
                    250px X 150px.
                  </span>
                </>
              )}
            </div>
          </FormContainer>

          <FormContainer title="Imagens" className="flex flex-col gap-4">
            {otherImg.map((img, index) => (
              <div className="flex flex-col" key={index}>
                <InputImages
                  onChange={handleFranchiseImgs}
                  label="Selecione uma imagem"
                  id={img === "" ? "firstImg" : String(index)}
                  img={img}
                  onDrop={onDropOtherImg}
                />

                <span className="text-[0.6rem] text-[#9E9D9D] text-right mt-4">
                  Imagem em png ou jpg até 2MB cada. Sugerimos dimensões de
                  250px X 150px.
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
                  URL de vídeo sobre sua Franquia{" "}
                  <span>(opcional) &#9432;</span>
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
              onClick={addModel}
            >
              Adicionar Modelo
            </button>

            {savedModels.map((model, index) => (
              <Fragment key={index}>{model.name}</Fragment>
            ))}
          </FormContainer>

          <div className="flex justify-end gap-4 mb-4">
            <button
              type="button"
              className="px-3 py-2 rounded bg-[#ececec] w-1/4"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-3 py-2 rounded text-white bg-[#007bff] w-1/4"
            >
              Salvar
            </button>
          </div>

          {/* TODO: Criar component para isso  */}
          {/* Sim... Isso é uma gambiarra temporária, sem julgamentos aqui. */}
          {models.map((model, index) => (
            <Fragment key={index}>
              <FormContainer
                title="Dados Essenciais"
                className="flex flex-col gap-4"
              >
                <Input
                  placeholder="Nome do Modelo de Negócio"
                  defaultValue={model.name}
                  onChange={(e) => {
                    model.name = e.target.value;
                  }}
                />

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
                                defaultChecked={
                                  model.capital_for_instalation_isFixed
                                }
                                onChange={(e) => {
                                  model.capital_for_instalation_isFixed =
                                    e.target.checked;
                                }}
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
                        defaultValue={model.capital_for_instalation}
                        onChange={(e) => {
                          model.capital_for_instalation = Number(
                            e.target.value,
                          );
                        }}
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
                                defaultChecked={model.working_capital_isFixed}
                                onChange={(e) => {
                                  model.working_capital_isFixed =
                                    e.target.checked;
                                }}
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
                        defaultValue={model.working_capital}
                        onChange={(e) => {
                          model.working_capital = Number(e.target.value);
                        }}
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
                                defaultChecked={model.franchise_fee_isFixed}
                                onChange={(e) => {
                                  model.franchise_fee_isFixed =
                                    e.target.checked;
                                }}
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
                        defaultValue={model.franchise_fee}
                        onChange={(e) => {
                          model.franchise_fee = Number(e.target.value);
                        }}
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
                                  defaultChecked={model.marketing_fee_isFixed}
                                  onChange={(e) => {
                                    model.marketing_fee_isFixed =
                                      e.target.checked;
                                  }}
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
                          defaultValue={model.marketing_fee}
                          onChange={(e) => {
                            model.marketing_fee = Number(e.target.value);
                          }}
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
                                  defaultChecked={model.royalties_isFixed}
                                  onChange={(e) => {
                                    model.royalties_isFixed = e.target.checked;
                                  }}
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
                          defaultValue={model.royalties}
                          onChange={(e) => {
                            model.royalties = Number(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="flex justify-between gap-12">
                      <div className="w-1/2 flex">
                        <Input
                          label="Área da Loja (Min)"
                          endComponent={
                            <div className="w-1/3 p-4 flex justify-center items-center border-l h-full">
                              M²
                            </div>
                          }
                          className="w-2/3"
                          id="storeArea"
                          placeholder="0,00"
                          defaultValue={model.store_area_min}
                          onChange={(e) => {
                            model.store_area_min = Number(e.target.value);
                          }}
                        />
                      </div>

                      <div className="w-1/2 flex">
                        <Input
                          label={
                            <div className="flex justify-between">
                              <span>Área da Loja (Max)</span>

                              <div className="flex items-end justify-evenly gap-1">
                                <input
                                  type="checkbox"
                                  className="transform scale-50"
                                  id="storeAreaFixed"
                                  defaultChecked={model.has_store_area}
                                  onChange={(e) => {
                                    model.has_store_area = e.target.checked;
                                  }}
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
                          defaultValue={model.store_area_max}
                          onChange={(e) => {
                            model.store_area_max = Number(e.target.value);
                          }}
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
                  onClick={() => {
                    removeModel(model.id);
                  }}
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="px-3 py-2 rounded text-white bg-[#007bff] w-1/4"
                  onClick={() => {
                    saveModel(model.id);
                  }}
                >
                  Salvar
                </button>
              </div>
            </Fragment>
          ))}
        </form>
      </Container>
    </div>
  );
}
