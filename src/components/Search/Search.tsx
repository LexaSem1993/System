import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import React, { useState } from "react";
import { BasicPopover } from "../Popover";
import { useSearchParams } from "react-router-dom";
import Box from "@mui/material/Box";

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get("search_val") || "");
  const handleChangeSearch = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSearchParams((searchParams) => {
      event.target.value
        ? searchParams.set("search_val", event.target.value)
        : searchParams.delete("search_val");
      return searchParams;
    });
    setValue(event.target.value);
  };
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        height: 50,
      }}
    >
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Поиск"
        inputProps={{ "aria-label": "search google maps" }}
        onChange={handleChangeSearch}
        value={value}
      />
      <Box sx={{ p: "10px" }} aria-label="search">
        <BasicPopover />
      </Box>
    </Paper>
  );
};
