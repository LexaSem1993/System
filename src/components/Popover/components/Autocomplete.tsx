import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { FC } from "react";
import { Option } from "../../../types";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

interface AutocompleteProps {
  options: Option[];
  onChange: (text: string[]) => void;
}

export const CheckboxesTags: FC<AutocompleteProps> = ({
  options,
  onChange,
}) => {
  const handleChange = (
    event: React.SyntheticEvent,
    value: Option | Option[] | null
  ) => {
    const numbersId = value as Option[];

    onChange(numbersId.map((item) => item.text));
  };

  return (
    <Autocomplete<Option>
      // @ts-ignore
      multiple
      id="checkboxes-tags-demo"
      options={options}
      onChange={handleChange}
      disableCloseOnSelect
      getOptionLabel={(options) => options.text}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.text}
        </li>
      )}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Checkboxes" placeholder="Favorites" />
      )}
    />
  );
};
