import React from "react";

export interface EnhancedTableProps {
  numSelected: number;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rowCount: number;
}
export interface HeadCell {
  id: string;
  numeric: boolean;
  disablePadding: boolean;
  label: string;
}
