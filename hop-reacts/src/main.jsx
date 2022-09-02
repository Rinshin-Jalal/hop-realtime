import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { hop } from "@onehop/client";

hop.init({
  projectId: import.meta.env.VITE_PROJECT_ID, // replace with your project ID
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
