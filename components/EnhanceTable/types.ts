interface tag {
  id: number;
  text: string;
}

export interface Server {
  id: number;
  name: string;
  type: string;
  location: string;
  organization_unit: string;
  inventory_number: number;
  tags: tag[];
  create_date: string;
  update_date: string;
  audit_date: string;
}

export type Order = "asc" | "desc";
