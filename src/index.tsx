import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import ruLocale from "date-fns/locale/ru";
import { configure } from "mobx";
import store from "./presentation/vm/store";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";

configure({ enforceActions: "observed" });

export const StoreContext = React.createContext(store);

ReactDOM.render(
  <React.StrictMode>
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
      <ThemeProvider theme={theme}>
        <StoreContext.Provider value={store}>
          <App />
        </StoreContext.Provider>
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();

// secondary #f4782e
// primary #3d4977
