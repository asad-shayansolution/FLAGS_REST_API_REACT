import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { THEME_KEY } from "./configs";
import router from "./routes";
import "./index.css";

if (JSON.parse(localStorage.getItem(THEME_KEY)))
  document.body.classList.add("dark");
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
