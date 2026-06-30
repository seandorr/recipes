import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import "./styles/main.scss";
import Week from "./pages/week/Week.tsx";
import CreateRecipe from "./pages/create/CreateRecipe.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="week" element={<Week />} />
        <Route path="create" element={<CreateRecipe />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
