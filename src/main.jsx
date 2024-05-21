import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WorkFlow from "./Pages/WorkFlow.jsx";
import { IntelliwriterSocialMedia } from "./Pages/IntelliwriterSocialMedia.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "features",
    element: <IntelliwriterSocialMedia />,
  },
  {
    path: "work-flow",
    element: <WorkFlow />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <RouterProvider router={router} />
);
