import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import CoinContextProvider from "./context/CoinContextProvider.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CoinContextProvider>
      <App />
    </CoinContextProvider>
  </StrictMode>
);
