import * as React from "react";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Box from "@mui/material/Box";
import { BasicSelect } from "./components/Select";
import { PC, tags } from "../../store/data";
import { CheckboxesTags } from "./components/Autocomplete";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { arrayTagsFromString } from "./utils";
import { Option } from "../../types";

export function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const [searchParams, setSearchParams] = useSearchParams();
  const [type, setType] = useState(searchParams.get("endpoint_type") || "");
  const [tagOptions, setTagOptions] = useState<Option[]>(
    arrayTagsFromString(searchParams.get("endpoint_tags"), tags) || []
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeType = (text: string) => {
    setSearchParams((searchParams) => {
      text
        ? searchParams.set("endpoint_type", text)
        : searchParams.delete("endpoint_type");
      return searchParams;
    });
    setType(text);
  };

  const handleChangeTags = (text: Option[]) => {
    setSearchParams((searchParams) => {
      text.length > 0
        ? searchParams.set(
            "endpoint_tags",
            text.map((item) => item.text).toString()
          )
        : searchParams.delete("endpoint_tags");
      return searchParams;
    });
    setTagOptions(text);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        <FilterAltIcon />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box sx={{ p: 2, paddingBottom: 2 }}>
          <BasicSelect options={PC} value={type} onChange={handleChangeType} />
        </Box>
        <Box sx={{ p: 2, paddingBottom: 20 }}>
          <CheckboxesTags
            options={tags}
            value={tagOptions}
            onChange={handleChangeTags}
          />
        </Box>
      </Popover>
    </div>
  );
}
