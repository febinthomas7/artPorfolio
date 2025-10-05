import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import GalleryGrid from "../components/GalleryGrid";
import { ToastContainer } from "react-toastify";

function Illustrations() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Header />
      <ToastContainer autoClose={1000} hideProgressBar theme="dark" />
      <GalleryGrid dataUrl="/illustration.json" title="Illustration" />
      <Newsletter />
    </div>
  );
}

export default Illustrations;
