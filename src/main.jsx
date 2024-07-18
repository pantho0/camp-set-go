import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/route.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster />
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <HelmetProvider>
          <RouterProvider router={router}>
            <App />
          </RouterProvider>
        </HelmetProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
