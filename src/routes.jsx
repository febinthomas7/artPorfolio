import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
const delayedImport = (importFn, delay = 2000) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(importFn()), delay);
  });

const Home = lazy(() => delayedImport(() => import("./pages/Home")));
const About = lazy(() => delayedImport(() => import("./pages/About")));
const Contact = lazy(() => delayedImport(() => import("./pages/Contact")));
const ConceptArt = lazy(() =>
  delayedImport(() => import("./pages/ConceptArt"))
);
const MattePainting = lazy(() =>
  delayedImport(() => import("./pages/MattePainting"))
);
const Illustrations = lazy(() =>
  delayedImport(() => import("./pages/Illustrations"))
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/illustrations",
    element: <Illustrations />,
  },
  {
    path: "/concept-art",
    element: <ConceptArt />,
  },
  {
    path: "/matte-painting",
    element: <MattePainting />,
  },
]);

export default router;
