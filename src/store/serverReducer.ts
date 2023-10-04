import { createSlice } from "@reduxjs/toolkit";
import { Server } from "../../components/EnhanceTable/types";

const initialState: { servers: Server[] } = { servers: [] };

const serverSlice = createSlice({
  name: "serverReducer",
  initialState,
  reducers: {},
});

export default serverSlice.reducer;
