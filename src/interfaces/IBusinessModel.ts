interface IBusinessModel {
  name: string;
  capital_for_instalation: number;
  capital_for_instalation_isFixed: boolean;
  working_capital: number;
  working_capital_isFixed: boolean;
  franchise_fee: number;
  franchise_fee_isFixed: boolean;
  marketing_fee: number;
  marketing_fee_isFixed: boolean;
  has_store_area: boolean;
  store_area_min?: number;
  store_area_max?: number;
  royalties: number;
  royalties_isFixed: number;
}
