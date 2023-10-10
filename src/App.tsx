import React from "react";
import Collapse from "@mui/material/Collapse";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { Server_and_PC } from "./pages/Server_and_PC";
import "./style.css";
import { Route, Routes } from "react-router-dom";
import { Breadcrumbs } from "./components/Breadcrumbs";
import { ListItemLink } from "./components/ListItemLink";

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
          <Breadcrumbs />
          <List>
            <ListItemLink to="/CMDB" open={open} onClick={handleClick} />
            <Collapse component="li" in={open} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemLink sx={{ pl: 4 }} to="/CMDB/server_and_PC" />
              </List>
            </Collapse>
          </List>
        </Box>
      </Box>
      <Routes>
        <Route path="/CMDB/server_and_PC" element={<Server_and_PC />} />
        <Route path="/dashboard" element={<div>1</div>} />
        <Route path="/networks" element={<div>2</div>} />
        <Route path="/handbook" element={<div>3</div>} />
        <Route path="/works" element={<div>4</div>} />
      </Routes>
    </div>
  );
}
