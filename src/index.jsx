import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sidebar from "./Component/Sidebar.jsx";
import Item from "./Component/Item.jsx";
import Mainpage from "./Component/MainPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/sidebar", element: <Sidebar /> },
  { path: "/mainpage", element: <Mainpage /> },
  { path: "/item", element: <Item /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
