import { Tag } from "../../types";

export const arrayTagsFromString = (tags: string | null, allTags: Tag[]) => {
  return allTags.filter((tag) =>
    tags?.split(",").find((item) => item === tag.text)
  );
};
