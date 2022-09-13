import React from "react";
import ReactDOM from "react-dom/client";
import { YousacApp } from "./YousacApp";

import "./index.css";
import { AuthProvider } from "./context/auth";
import { ContentProvider } from "./context/content";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <ContentProvider>
        <YousacApp />
      </ContentProvider>
    </AuthProvider>
  </React.StrictMode>
);
