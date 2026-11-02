import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { LazyMotion, domAnimation } from "framer-motion";

import Router from "./router";

const App = () => (
  <LazyMotion features={domAnimation} strict>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </LazyMotion>
);

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(<App />);
