import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
const MattePainting = lazy(() => import("./pages/MattePainting.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

const ConceptArt = lazy(() => import("./pages/ConceptArt.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Home = lazy(() => import("./pages/Home.jsx"));
const Illustrations = lazy(() => import("./pages/Illustrations.jsx"));

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
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
