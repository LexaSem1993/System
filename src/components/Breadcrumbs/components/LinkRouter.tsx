import { LinkRouterProps } from "./type";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import React from "react";

export function LinkRouter(props: LinkRouterProps) {
  return <Link {...props} component={RouterLink} />;
}
