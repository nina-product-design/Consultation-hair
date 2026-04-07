import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ConsultationPage from "./pages/ConsultationPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConsultationPage />
  </StrictMode>
);
