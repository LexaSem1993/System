import * as React from "react";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Box from "@mui/material/Box";
import { BasicSelect } from "./components/Select";
import { PC, tags } from "../../store/data";
import { CheckboxesTags } from "./components/Autocomplete";
import { useSearchParams } from "react-router-dom";

export function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get("endpoint_tags"));

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeType = (text: string) => {
    setSearchParams((searchParams) => {
      searchParams.set("endpoint_type", text);
      searchParams.get("endpoint_type");
      return searchParams;
    });
  };

  const handleChangeTags = (text: string[]) => {
    setSearchParams((searchParams) => {
      searchParams.set("endpoint_tags", text.toString());
      searchParams.get("endpoint_tags");
      return searchParams;
    });
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
          <BasicSelect options={PC} onChange={handleChangeType} />
        </Box>
        <Box sx={{ p: 2, paddingBottom: 20 }}>
          <CheckboxesTags options={tags} onChange={handleChangeTags} />
        </Box>
      </Popover>
    </div>
  );
}
