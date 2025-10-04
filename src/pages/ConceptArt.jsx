import Header from '../components/Header';
import Newsletter from '../components/Newsletter';
import GalleryGrid from '../components/GalleryGrid';

function ConceptArt() {
  return (
    <>
      <Header />
      <GalleryGrid dataUrl="/concept.json" title="Concept Art" />
      <Newsletter />
    </>
  );
}

export default ConceptArt;
