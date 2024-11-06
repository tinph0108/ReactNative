// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import bikeReducer from './bikeSlice';

const store = configureStore({
  reducer: {
    bikes: bikeReducer, // Đảm bảo rằng tên này khớp với tên sử dụng trong useSelector
  },
});

export default store;
