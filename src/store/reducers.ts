// src/store/reducers.ts

import { ADD_IMAGE, DELETE_IMAGE } from './action';

interface UploadedImage {
  src: string;
  filter: string;
}

interface GalleryState {
  images: UploadedImage[];
}

const initialState: GalleryState = {
  images: [],
};

const galleryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_IMAGE:
      return {
        ...state,
        images: [action.payload, ...state.images],
      };
    case DELETE_IMAGE:
      return {
        ...state,
        images: state.images.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

export default galleryReducer;
