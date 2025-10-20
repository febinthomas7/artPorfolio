import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import FallBack from "./components/FallBack.jsx";
import "./style.css";
import "react-toastify/dist/ReactToastify.css";
import "./loader.css";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <Suspense fallback={<FallBack />}>
      <RouterProvider router={router} />
    </Suspense>
  </ErrorBoundary>
);
