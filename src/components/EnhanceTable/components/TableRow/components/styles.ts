import { makeStyles } from "@mui/styles";
import { Tag } from "../../../../../types";
import { Theme } from "@mui/material";

const getColor = (tag: Tag) => {
  switch (tag.text) {
    case "latinica":
      return {
        backgroundColor: "white",
        color: "black",
      };
    case "red tag":
      return {
        backgroundColor: "red",
      };
    case "blue tag":
      return {
        backgroundColor: "blue",
      };
    case "green tag":
      return {
        backgroundColor: "green",
      };
    case "yellow tag":
      return {
        backgroundColor: "yellow",
      };
    case "orange tag":
      return {
        backgroundColor: "orange",
      };
    default:
      return {};
  }
};

export const useStyles = makeStyles<Theme, { tag: Tag }>({
  tag: (props) => getColor(props.tag),
});
