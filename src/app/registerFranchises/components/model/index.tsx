// TODO: ADICIONAR ERROS E ESTILIZAÇÃO PARA CAMPOS

import { Divider } from "@/components/Divider";
import { IModel } from "@/interfaces/IModel";
import { zodResolver } from "@hookform/resolvers/zod";
import { Ref, forwardRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../form/inputs";

type ModelProps = {
  isOpen: boolean;
  onClose: () => void;
  ref: Ref<HTMLFormElement>;
  addModel: (data: IModel) => void;
  values?: IModel;
};

const Model = forwardRef<HTMLFormElement, ModelProps>(
  ({ isOpen, onClose, addModel, values }, ref) => {
    const FormSchema = z.object({
      name: z.string().min(1),
      capital_for_instalation: z.string().min(0.01),
      capital_for_instalation_isFixed: z.boolean().optional(),
      working_capital: z.string().min(0.01),
      working_capital_isFixed: z.boolean().optional(),
      franchise_fee: z.string().min(0.01),
      franchise_fee_isFixed: z.boolean().optional(),
      marketing_fee: z.string().min(0.01),
      marketing_fee_isFixed: z.boolean().optional(),
      has_store_area: z.boolean().optional(),
      store_area_min: z.string().min(0.01),
      store_area_max: z.string().min(0.01),
      royalties: z.string().min(0.01),
      royalties_isFixed: z.boolean().optional(),
    });

    const form = useForm({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        name: values?.name || "",
        capital_for_instalation: values?.capital_for_instalation || 0,
        capital_for_instalation_isFixed:
          values?.capital_for_instalation_isFixed || false,
        working_capital: values?.working_capital || 0,
        working_capital_isFixed: values?.working_capital_isFixed || false,
        franchise_fee: values?.franchise_fee || 0,
        franchise_fee_isFixed: values?.franchise_fee_isFixed || false,
        marketing_fee: values?.marketing_fee || 0,
        marketing_fee_isFixed: values?.marketing_fee_isFixed || false,
        store_area_min: values?.store_area_min || 0,
        store_area_max: values?.store_area_max || 0,
        has_store_area: values?.has_store_area || false,
        royalties: values?.royalties || 0,
        royalties_isFixed: values?.royalties_isFixed || false,
      },
    });

    const handleSave = () => {
      console.log("Teste2");

      const newModel: IModel = {
        ...form.getValues(),
      };

      addModel(newModel);

      onClose();
    };

    return (
      <>
        {isOpen && (
          <form
            className="max-w-2xl p-5 bg-white rounded-md shadow-[0_1px_12px_1px_rgba(0,0,0,0.2)] flex flex-col gap-4"
            onSubmit={form.handleSubmit(handleSave)}
            ref={ref}
          >
            <h2 className="text-2xl">Dados Essenciais</h2>
            <Divider />

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
                            {...form.register(
                              "capital_for_instalation_isFixed",
                            )}
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
                    {...form.register("capital_for_instalation")}
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
                            {...form.register("working_capital_isFixed")}
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
                    {...form.register("working_capital")}
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
                            {...form.register("franchise_fee_isFixed")}
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
                    {...form.register("franchise_fee")}
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
                              {...form.register("marketing_fee_isFixed")}
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
                      {...form.register("marketing_fee")}
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
                              {...form.register("royalties_isFixed")}
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
                      {...form.register("royalties")}
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
                      {...form.register("store_area_min")}
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
                              {...form.register("has_store_area")}
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
                      {...form.register("store_area_max")}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4 mb-12">
              <button
                type="button"
                className="px-3 py-2 rounded bg-[#ececec] w-1/4"
                onClick={onClose}
              >
                Cancelar
              </button>

              <button
                type="submit"
                className="px-3 py-2 rounded text-white bg-[#007bff] w-1/4"
                onClick={() => {
                  console.log(form.formState.errors);
                }}
              >
                Salvar
              </button>
            </div>
          </form>
        )}
      </>
    );
  },
);
Model.displayName = "Model";

export { Model };
