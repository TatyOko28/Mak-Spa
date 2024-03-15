// Cette étape est généralement non nécessaire avec Redux Toolkit
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import reviewsReducer from './reducers/reviewsReducer';

const rootReducer = combineReducers({
  reviews: reviewsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
