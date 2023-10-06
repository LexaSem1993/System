import { HeadCell } from "./types";

export const headCells: HeadCell[] = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Name ",
  },
  {
    id: "type",
    numeric: true,
    disablePadding: false,
    label: "Type",
  },
  {
    id: "location",
    numeric: true,
    disablePadding: false,
    label: "Location (g)",
  },
  {
    id: "organization_unit",
    numeric: true,
    disablePadding: false,
    label: "Organization_unit (g)",
  },
  {
    id: "inventory_number",
    numeric: true,
    disablePadding: false,
    label: "Inventory_number (g)",
  },
  {
    id: "tags",
    numeric: true,
    disablePadding: false,
    label: "Tags (g)",
  },
  {
    id: "create_date",
    numeric: true,
    disablePadding: false,
    label: "Create_date (g)",
  },
  {
    id: "update_date",
    numeric: true,
    disablePadding: false,
    label: "Update_date (g)",
  },
  {
    id: "audit_date",
    numeric: true,
    disablePadding: false,
    label: "Audit_date (g)",
  },
];
