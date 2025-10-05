import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import GalleryGrid from "../components/GalleryGrid";

function Illustrations() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Header />
      <GalleryGrid dataUrl="/illustration.json" title="Illustration" />
      <Newsletter />
    </div>
  );
}

export default Illustrations;
