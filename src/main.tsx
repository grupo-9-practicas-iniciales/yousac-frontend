import React from "react";
import ReactDOM from "react-dom/client";
import { YousacApp } from "./YousacApp";

import "./index.css";
import { AuthProvider } from "./context/auth";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <YousacApp />
    </AuthProvider>
  </React.StrictMode>
);
