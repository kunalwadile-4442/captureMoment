// Components/Gallery.tsx

import React from 'react';

interface UploadedImage {
  src: string;
  filter: string;
}

interface GalleryProps {
  images: UploadedImage[];
  deleteImage: (index: number) => void;
}

const Gallery: React.FC<GalleryProps> = ({ images, deleteImage }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col-md-4 col-sm-6 mb-3">
            <div className="position-relative">
              <img
                src={image.src}
                alt={`Captured ${index}`}
                style={{ filter: image.filter }}
                className="img-thumbnail w-100"
              />
              <button
                onClick={() => deleteImage(index)}
                className="btn btn-danger position-absolute top-0 end-0 m-1"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
