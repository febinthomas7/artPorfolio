import Header from '../components/Header';
import Newsletter from '../components/Newsletter';
import GalleryGrid from '../components/GalleryGrid';

function MattePainting() {
  return (
    <>
      <Header />
      <GalleryGrid dataUrl="/matte.json" title="Matte Painting" />
      <Newsletter />
    </>
  );
}

export default MattePainting;
