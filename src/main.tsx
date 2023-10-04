import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <StyledEngineProvider injectFirst>
            <App />
        </StyledEngineProvider>
      </BrowserRouter>
   </Provider>
  </>
);
