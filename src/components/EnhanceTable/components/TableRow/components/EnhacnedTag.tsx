import React, { FC } from "react";
import { Tag } from "../../../../../types";
import { Chip } from "@mui/material";
import { useStyles } from "./styles";

interface TagProps {
  tag: Tag;
}

export const EnhacnedTag: FC<TagProps> = ({ tag }) => {
  const classes = useStyles({ tag });
  return <Chip className={classes.tag} label={tag.text} variant="outlined" />;
};
