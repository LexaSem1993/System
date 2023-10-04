import { useLocation } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import React from "react";
import { LinkRouter } from "./components/LinkRouter";

export const breadcrumbNameMap: { [key: string]: string } = {
  "/dashboard": "Dashboard",
  "/CMDB": "CMDB",
  "/CMDB/server_and_PC": "Server_and_PC",
  "/networks": "Networks",
  "/handbook": "Handbook",
  "/works": "Works",
};

export function Page() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <LinkRouter underline="hover" color="inherit" to="/">
        Home
      </LinkRouter>
      {pathnames.map((_value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        return last ? (
          <Typography key={to}>{breadcrumbNameMap[to]}</Typography>
        ) : (
          <LinkRouter underline="hover" color="black" to={to} key={to}>
            {breadcrumbNameMap[to]}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
}
