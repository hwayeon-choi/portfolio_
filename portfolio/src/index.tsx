import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Reset } from 'styled-reset'
import App from "./App/App";
import "./index.css";
const container = document.getElementById("root");
const root = createRoot(container as Element);

root.render(
  <BrowserRouter>
    <Reset />
      <App />
  </BrowserRouter>
);