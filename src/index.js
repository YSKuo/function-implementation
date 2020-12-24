import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { Provider } from "react-redux";
import store from "./redux/store";

import App from "./components/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </Provider>,
  rootElement
);
