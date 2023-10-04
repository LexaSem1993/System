import React from "react";
import Collapse from "@mui/material/Collapse";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { Server_and_PC } from "./pages/Server_and_PC";
import "./style.css";
import { Route, Routes } from "react-router-dom";
import { Page } from "../components/Breadcrumbs/Breadcrumbs";
import { ListItemLink } from "../components/ListItemLink/ListItemLink";

export default function App() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  return (
    <div className="container">
      <Box sx={{ display: "flex", flexDirection: "column", width: 360 }}>
        <Box
          sx={{
            color: "background.black",
          }}
          component="nav"
          aria-label="mailbox folders"
        >
          <Page />
          <List>
            <ListItemLink to="/dashboard" />
            <ListItemLink to="/CMDB" open={open} onClick={handleClick} />
            <Collapse component="li" in={open} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemLink sx={{ pl: 4 }} to="/CMDB/server_and_PC" />
              </List>
            </Collapse>
            <ListItemLink to="/networks" />
            <ListItemLink to="/handbook" />
            <ListItemLink to="/works" />
          </List>
        </Box>
      </Box>
      <Routes>
        <Route path="/CMDB/server_and_PC" element={<Server_and_PC />} />
      </Routes>
    </div>
  );
}
