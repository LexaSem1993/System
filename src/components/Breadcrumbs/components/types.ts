import { LinkProps } from "@mui/material/Link";

export interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}
