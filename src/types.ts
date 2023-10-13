export interface Tag {
  id: number;
  text:
    | "latinica"
    | "red tag"
    | "blue tag"
    | "green tag"
    | "yellow tag"
    | "orange tag"
    | "black tag"
    | "white tag";
}

export type Option = { id: number; text: string };

export type ServerType = "default" | "vm_host" | "vm_guest";

export interface Server {
  id: number;
  name: string;
  type: ServerType;
  location: string;
  organization_unit: string;
  inventory_number: number;
  tags: Tag[];
  create_date: string;
  update_date: string;
  audit_date: string;
}

export type Order = "asc" | "desc";
