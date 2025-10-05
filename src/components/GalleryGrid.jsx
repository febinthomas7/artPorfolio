import { useState, useEffect } from "react";
import "../loader.css";

function GalleryGrid({ dataUrl, title }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(dataUrl);
        const data = await response.json();
        setTimeout(() => {
          setImages(data);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error("Error loading images:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [dataUrl]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <h1>{title}</h1>
      {loading && (
        <div className="masonry-skeleton">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="skeleton-card"></div>
          ))}
        </div>
      )}

      <div className="containerr">
        {images.map((image, index) => (
          <div className="boxx" key={index}>
            <div className="boxShade" onClick={() => handleImageClick(image)}>
              {image.title}
            </div>
            <img
              loading="lazy"
              src={image.url}
              alt={image.title}
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>

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
    </>
  );
}

export default GalleryGrid;
