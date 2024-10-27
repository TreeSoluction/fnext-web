interface IFranchise {
  id: string;
  ownerId: string;
  deleted: boolean;
  created_at: string; // You may consider using Date if you want to handle date objects
  updated_at: string; // Same as above
  sector: string;
  name: string;
  description: string;
  logo: string;
  images: string[]; // Assuming images can have various properties
  videos: Record<string, unknown>; // Assuming videos can have various properties
  site: string;
  average_monthly_billing: number;
  units_in_brazil: number;
  headquarters: string;
  ROI_min: number;
  ROI_max: number;
  Models: Model[];
}
