import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FC } from "react";
import { Option } from "../../../types";

interface SelectProps {
  options: Option[];
  onChange: (text: string) => void;
  value: string;
}

export const BasicSelect: FC<SelectProps> = ({ options, onChange, value }) => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    onChange(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Тип ПК</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Тип ПК"
          onChange={handleChange}
        >
          {options.map((row) => {
            return (
              <MenuItem key={row.id} value={row.text}>
                {row.text}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};
