import { operations } from "@/utils/operations";
import { Search } from "lucide-react";
import { RefObject, forwardRef } from "react";
import { FormContainer } from "../container";
import { Input } from "../form/inputs";

type ModelProps = {
  operatingSegmentMessageClass: string;
  operatingSegmentMessage: string;
  isOpen: boolean;
  onClose: () => void;
  ref: RefObject<HTMLDivElement>;
};

const Model = forwardRef<HTMLDivElement, ModelProps>(
  (
    { operatingSegmentMessageClass, operatingSegmentMessage, isOpen, onClose },
    ref,
  ) => {
    return (
      <>
        {isOpen && (
          <>
            <FormContainer
              title="Dados Essenciais"
              className="flex flex-col gap-4"
              id="model"
              ref={ref}
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
                placeholder="Buscar Modelo de negócio"
                list="operation"
              />

              <datalist
                className="w-60 my-2 rounded-md bg-PASTEL p-2 border-none"
                id="operation"
              >
                {operations.map((options, index) => (
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
                onClick={onClose}
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
          </>
        )}
      </>
    );
  },
);
Model.displayName = "Model";

export { Model };
