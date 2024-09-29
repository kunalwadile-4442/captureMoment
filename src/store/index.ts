// src/store/index.ts

import { createStore } from 'redux';
import galleryReducer from './reducers';

const store = createStore(galleryReducer);

export default store;
