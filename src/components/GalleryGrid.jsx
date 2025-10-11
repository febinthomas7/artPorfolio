import { useState, useEffect, useRef } from "react";
import Masonry from "react-masonry-css";
import imagesLoaded from "imagesloaded";
import "../loader.css";
import "../GalleryGrid.css"; // 👈 new file for styles below

function GalleryGrid({ dataUrl, title }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const masonryRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(dataUrl);
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error loading images:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [dataUrl]);

  useEffect(() => {
    if (!masonryRef.current) return;
    const imgLoad = imagesLoaded(masonryRef.current);
    imgLoad.on("progress", () => {
      masonryRef.current?.dispatchEvent(new Event("layout"));
    });
  }, [images]);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 2,
  };

  const handleImageClick = (image) => setSelectedImage(image);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <div className="gallery-wrapper">
      <h1 className="gallery-title">{title}</h1>

      {loading ? (
        <div className="masonry-skeleton">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="skeleton-card"></div>
          ))}
        </div>
      ) : (
        <div ref={masonryRef}>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {images?.map((image, index) => (
              <div
                className="masonry-item"
                key={index}
                onClick={() => handleImageClick(image)}
              >
                <div className="masonry-img-wrapper">
                  <img
                    src={image.url}
                    alt={image.title}
                    loading="lazy"
                    className="masonry-img"
                    onLoad={(e) => e.currentTarget.classList.add("loaded")}
                  />
                  <div className="masonry-overlay">{image.title}</div>
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      )}

      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              &times;
            </button>
            <img src={selectedImage.url} alt={selectedImage.title} />
            <p className="lightbox-title">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryGrid;
