import { Link, createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
const MattePainting = lazy(() => import("./pages/MattePainting"));
const ConceptArt = lazy(() => import("./pages/ConceptArt"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Home = lazy(() => import("./pages/Home"));
const Illustrations = lazy(() => import("./pages/Illustrations"));

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
