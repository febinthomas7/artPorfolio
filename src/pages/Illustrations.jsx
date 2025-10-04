import Header from '../components/Header';
import Newsletter from '../components/Newsletter';
import GalleryGrid from '../components/GalleryGrid';

function Illustrations() {
  return (
    <>
      <Header />
      <GalleryGrid dataUrl="/illustration.json" title="Illustration" />
      <Newsletter />
    </>
  );
}

export default Illustrations;
