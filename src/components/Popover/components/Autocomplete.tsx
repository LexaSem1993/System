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
  onChange: (text: Option[]) => void;
  value: Option[];
}

export const CheckboxesTags: FC<AutocompleteProps> = (props) => {
  const { options, onChange, value } = props;
  const handleChange = (
    event: React.SyntheticEvent,
    value: Option | Option[] | null
  ) => {
    const numbersId = value as Option[];

    onChange(numbersId);
  };

  return (
    <Autocomplete<Option>
      // @ts-ignore
      multiple
      id="checkboxes-tags-demo"
      options={options}
      onChange={handleChange}
      disableCloseOnSelect
      // @ts-ignore
      value={value}
      getOptionLabel={(options) => options.text}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
            value={value}
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
