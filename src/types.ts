import { ListItemProps } from "@mui/material/ListItem";
import { LinkProps } from "@mui/material/Link";

export interface EnhancedTableToolbarProps {
  numSelected: number;
}

export interface ListItemLinkProps extends ListItemProps {
  to: string;
  open?: boolean;
}

export interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}
