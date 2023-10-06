import React, { FC } from "react";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import MuiTableRow from "@mui/material/TableRow";
import { Server } from "../../../../types";
import { EnhacnedTag } from "./components/EnhacnedTag";

interface TableRowProps {
  row: Server;
  selected: readonly string[];
  setSelected: React.Dispatch<React.SetStateAction<readonly string[]>>;
}
export const EnhancedTableRow: FC<TableRowProps> = ({
  row,
  selected,
  setSelected,
}) => {
  const isSelected = (name: string) => selected.indexOf(name) !== -1;
  const isItemSelected = isSelected(row.name);
  const labelId = `enhanced-table-checkbox-${row.id}`;
  const handleClick = (_event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  return (
    <MuiTableRow
      hover
      onClick={(event) => handleClick(event, row.name)}
      role="checkbox"
      aria-checked={isItemSelected}
      tabIndex={-1}
      key={row.name}
      selected={isItemSelected}
      sx={{ cursor: "pointer" }}
    >
      <TableCell padding="checkbox">
        <Checkbox
          color="primary"
          checked={isItemSelected}
          inputProps={{
            "aria-labelledby": labelId,
          }}
        />
      </TableCell>
      <TableCell component="th" id={labelId} scope="row" padding="none">
        {row.name}
      </TableCell>
      <TableCell align="right">{row.type}</TableCell>
      <TableCell align="right">{row.location}</TableCell>
      <TableCell align="right">{row.organization_unit}</TableCell>
      <TableCell align="right">{row.inventory_number}</TableCell>
      <TableCell align="right">
        {row.tags.map((tag) => (
          <EnhacnedTag key={tag.id} tag={tag} />
        ))}
      </TableCell>
      <TableCell align="right">{row.create_date}</TableCell>
      <TableCell align="right">{row.update_date}</TableCell>
      <TableCell align="right">{row.audit_date}</TableCell>
    </MuiTableRow>
  );
};
