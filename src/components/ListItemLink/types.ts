import { ListItemProps } from "@mui/material/ListItem";

export interface ListItemLinkProps extends ListItemProps {
  to: string;
  open?: boolean;
}
