export interface ICreateFranchises {
  ownerID: string;
  Business: IBusisness;
}

interface IBusisness {
  name: string;
  logo: string;
  average_monthly_billing: number;
  units_in_brazil: number;
  headquarters: string;
  ROI_min: number;
  ROI_max: number;
}
