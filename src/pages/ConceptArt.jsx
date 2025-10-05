import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import GalleryGrid from "../components/GalleryGrid";
import { ToastContainer } from "react-toastify";

function ConceptArt() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <ToastContainer autoClose={1000} hideProgressBar theme="dark" />
      <Header />
      <GalleryGrid dataUrl="/concept.json" title="Concept Art" />
      <Newsletter />
    </div>
  );
}

export default ConceptArt;
