import { IModel } from "@/interfaces/IModel";
import { RefObject, forwardRef } from "react";
import { useForm } from "react-hook-form";
import { FormContainer } from "../container";
import { Input } from "../form/inputs";

type ModelProps = {
  isOpen: boolean;
  onClose: () => void;
  ref: RefObject<HTMLDivElement>;
  addModel: (data: IModel) => void;
};

const Model = forwardRef<HTMLDivElement, ModelProps>(
  ({ isOpen, onClose, addModel }, ref) => {
    const form = useForm({
      defaultValues: {
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
        royalties_isFixed: false,
      },
    });

    const handleSave = () => {
      const newModel: IModel = {
        ...form.getValues(),
      };

      addModel(newModel);

      onClose();
    };

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
                placeholder="Nome Modelo de negócio"
                onChange={(a) => form.setValue("name", a.currentTarget.value)}
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
                              onChange={(e) =>
                                form.setValue(
                                  "capital_for_instalation_isFixed",
                                  e.currentTarget.checked,
                                )
                              }
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
                      onChange={(e) =>
                        form.setValue(
                          "capital_for_instalation",
                          Number(e.currentTarget.value),
                        )
                      }
                      type="number"
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
                              onChange={(e) => {
                                form.setValue(
                                  "working_capital_isFixed",
                                  e.currentTarget.checked,
                                );
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
                      onChange={(e) => {
                        form.setValue(
                          "working_capital",
                          Number(e.currentTarget.value),
                        );
                      }}
                      type="number"
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
                              onChange={(e) => {
                                form.setValue(
                                  "franchise_fee_isFixed",
                                  e.currentTarget.checked,
                                );
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
                      onChange={(e) => {
                        form.setValue(
                          "franchise_fee",
                          Number(e.currentTarget.value),
                        );
                      }}
                      type="number"
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
                                onChange={(e) => {
                                  form.setValue(
                                    "marketing_fee_isFixed",
                                    e.currentTarget.checked,
                                  );
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
                        onChange={(e) => {
                          form.setValue(
                            "marketing_fee",
                            Number(e.currentTarget.value),
                          );
                        }}
                        type="number"
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
                                onChange={(e) => {
                                  form.setValue(
                                    "royalties_isFixed",
                                    e.currentTarget.checked,
                                  );
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
                        type="number"
                        onChange={(e) => {
                          form.setValue(
                            "royalties",
                            Number(e.currentTarget.value),
                          );
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between gap-12">
                    <div className="w-1/2 flex">
                      <Input
                        label="Área da Loja"
                        endComponent={
                          <div className="w-1/3 p-4 flex justify-center items-center border-l h-full">
                            M²
                          </div>
                        }
                        className="w-2/3"
                        id="storeAreaMin"
                        placeholder="0,00"
                        onChange={(e) =>
                          form.setValue(
                            "store_area_min",
                            Number(e.currentTarget.value),
                          )
                        }
                        type="number"
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
                                id="storeAreaContains"
                                onChange={(e) =>
                                  form.setValue(
                                    "has_store_area",
                                    e.currentTarget.checked,
                                  )
                                }
                              />
                              <label
                                className="text-blue-600"
                                htmlFor="storeAreaContains"
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
                onClick={handleSave}
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
