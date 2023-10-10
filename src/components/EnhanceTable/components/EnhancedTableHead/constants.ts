import { HeadCell } from "./types";

export const headCells: HeadCell[] = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Название ",
  },
  {
    id: "type",
    numeric: true,
    disablePadding: false,
    label: "Тип",
  },
  {
    id: "location",
    numeric: true,
    disablePadding: false,
    label: "Расположение ",
  },
  {
    id: "organization_unit",
    numeric: true,
    disablePadding: false,
    label: "Орг.единица ",
  },
  {
    id: "inventory_number",
    numeric: true,
    disablePadding: false,
    label: "Инв.номер ",
  },
  {
    id: "tags",
    numeric: true,
    disablePadding: false,
    label: "Теги ",
  },
  {
    id: "create_date",
    numeric: true,
    disablePadding: false,
    label: "Дата создания ",
  },
  {
    id: "update_date",
    numeric: true,
    disablePadding: false,
    label: "Дата обновления ",
  },
  {
    id: "audit_date",
    numeric: true,
    disablePadding: false,
    label: "Дата аудита ",
  },
];
