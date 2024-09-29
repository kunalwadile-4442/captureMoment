// src/App.tsx

import { ToastContainer, toast } from 'react-toastify';
import React from 'react';
import Camera from './Components/Camera';
import Gallery from './Components/Gallery';
import { useDispatch, useSelector } from 'react-redux';
import { addImage, deleteImage } from './store/action';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const uploadedImages = useSelector((state: any) => state.images);

  const handleAddImage = (imageSrc: string, filter: string) => {
    dispatch(addImage(imageSrc, filter));
    toast.success('Image captured and saved to gallery!', { autoClose: 2000 });
  };

  const handleDeleteImage = (index: number) => {
    dispatch(deleteImage(index));
    toast.error('Image deleted from gallery!', { autoClose: 2000 });
  };

  return (
    <div className="App container">
      <h1 className="text-center mt-4">Photo Filter App</h1>
      <Camera addUploadedImage={handleAddImage} />
      <Gallery images={uploadedImages} deleteImage={handleDeleteImage} />
   
    </div>
  );
};

export default App;
