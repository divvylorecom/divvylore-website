import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import Router from "./router";

const App = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(<App />);
