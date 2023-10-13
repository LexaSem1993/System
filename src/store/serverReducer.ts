import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { rows } from "./data";
import { Server } from "../types";

const initialState: { servers: Server[] } = { servers: rows };

const serverSlice = createSlice({
  name: "serverReducer",
  initialState,
  reducers: {
    filterTable(
      state,
      action: PayloadAction<{
        type: string | null;
        tags: string | null;
        search: string | null;
      }>
    ) {
      let initialRows = rows;
      const actionType = action.payload.type;
      const actionTags = action.payload.tags;
      const actionSearch = action.payload.search;
      if (actionType) {
        initialRows = initialRows.filter((item) => item.type === actionType);
      }
      if (actionTags) {
        initialRows = initialRows.filter((item) => {
          const arrayTags = actionTags.split(",");
          return item.tags.find((item) =>
            arrayTags.includes(String(item.text))
          );
        });
      }
      if (actionSearch) {
        initialRows = initialRows.filter(
          (item) => item.name.indexOf(actionSearch) !== -1
        );
      }
      state.servers = initialRows;
    },
  },
});

export const { filterTable } = serverSlice.actions;

export default serverSlice.reducer;
