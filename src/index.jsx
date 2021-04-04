import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import { GlobalProvider } from './contexts/GlobalContext.jsx'

ReactDOM.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
  document.getElementById("root")
);
