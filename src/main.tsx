import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppVersion from "./Component/AppVersion/AppVersion";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <AppVersion/>
  </React.StrictMode>,
);
