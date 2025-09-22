import { configureStore } from '@reduxjs/toolkit';
import foodCheckReducer from './slices/foodCheckSlice';

const store = configureStore({
  reducer: {
    foodCheck: foodCheckReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;