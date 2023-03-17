import React from "react";
import { createRoot } from "react-dom";
import "./index.css";
//import NoteApp from "./examples/Note-app";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));
root.render(
  
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
