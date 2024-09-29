// Components/Camera.tsx

import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import Filters from './Filters';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';

interface CameraProps {
  addUploadedImage: (imageSrc: string, filter: string) => void;
}

const Camera: React.FC<CameraProps> = ({ addUploadedImage }) => {
  const webcamRef = useRef<Webcam>(null);
  const [filter, setFilter] = useState<string>('none');
  const [overlayImage, setOverlayImage] = useState<string | null>(null); // For custom filters

  useEffect(() => {
    // Load any required models if using face-api.js or similar libraries
  }, []);

  const capture = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      addUploadedImage(imageSrc, filter);
      toast.success('Image captured and saved to gallery!', { autoClose: 2000 });
    }
  };

  const applyFilter = (selectedFilter: string) => {
    setFilter(selectedFilter);
    switch (selectedFilter) {
      case 'dog':
        setOverlayImage('/path/to/dog-overlay.png');
        break;
      case 'glasses':
        setOverlayImage('/path/to/glasses-overlay.png');
        break;
      case 'hat':
        setOverlayImage('/path/to/hat-overlay.png');
        break;
      default:
        setOverlayImage(null);
    }
  };

  return (
    <div className="camera-container text-center">
      <div className="webcam-wrapper">
        <Webcam 
          audio={false} 
          ref={webcamRef} 
          screenshotFormat="image/jpeg" 
          style={{
            filter: filter === 'none' ? 'none' : filter,
            borderRadius: '15px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          }}
        />
        {overlayImage && (
          <img
            src={overlayImage}
            alt="Overlay"
            className="overlay-image" 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '15px' }}
          />
        )}
      </div>
      <div className="mt-3">
        <button 
          onClick={capture} 
          className="btn btn-primary mb-2 capture-button"
        >
          Capture Photo
        </button>
      </div>
      <Filters applyFilter={applyFilter} />
      <ToastContainer />
    </div>
  );
};

export default Camera;
