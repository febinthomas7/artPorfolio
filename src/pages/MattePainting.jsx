import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import GalleryGrid from "../components/GalleryGrid";
import { ToastContainer } from "react-toastify";

function MattePainting() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <ToastContainer autoClose={1000} hideProgressBar theme="dark" />
      <Header />
      <GalleryGrid dataUrl="/matte.json" title="Matte Painting" />
      <Newsletter />
    </div>
  );
}

export default MattePainting;
