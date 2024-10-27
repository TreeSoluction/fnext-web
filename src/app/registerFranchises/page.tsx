"use client";

import { ChangeEvent, Fragment, useContext, useState } from "react";

import { AuthContext } from "@/contexts/auth.context";
import { CreateFranchises } from "@/services/Franchises/create.franchises";
import { ICreateFranchises } from "@/services/interfaces/IFranchises";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Container, FormContainer } from "./components/container";
import { Input, InputImage } from "./components/form/inputs";

export default function Franchise() {
  const router = useRouter();

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

  const saveModel = (id: string) => {
    setSavedModels((s) => [...s, models.filter((model) => model.id === id)[0]]);
    setModels(models.filter((model) => model.id !== id));
  };

  const onSubmit = (a: any) => {
    const data: ICreateFranchises = {
      ownerID: owner.id,
      Business: {
        ...form.getValues(),
        name: nameState,
        logo: logoImg,
        average_monthly_billing: monthlyRevenue,
        units_in_brazil: headquarters,
        headquarters: franchiseDescriptionFrist,
        ROI_min: returnonInvestmenFrom,
        ROI_max: returnonInvestmenUntil,
      },
    };

    // TODO: Adicionar tratamento de erro e redirecionamento caso sucesso
    CreateFranchises(data)
      .then((res) => {
        router.push("/");
      })
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
