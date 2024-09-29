// src/store/actions.ts

export const ADD_IMAGE = 'ADD_IMAGE';
export const DELETE_IMAGE = 'DELETE_IMAGE';

export const addImage = (imageSrc: string, filter: string) => ({
  type: ADD_IMAGE,
  payload: { src: imageSrc, filter },
});

export const deleteImage = (index: number) => ({
  type: DELETE_IMAGE,
  payload: index,
});
