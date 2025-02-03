import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/index.css";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import { LoginContextProvider } from "./assets/contexts/loginContext"; // IMPORTO IL CONTEXT

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginContextProvider>
      <App />
    </LoginContextProvider>
  </StrictMode>
);
