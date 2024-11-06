import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://672ad353976a834dd0248031.mockapi.io/bike/bike';

// Thunk để lấy dữ liệu
export const fetchBikes = createAsyncThunk('bikes/fetchBikes', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

// Thunk để thêm xe đạp
export const addBike = createAsyncThunk('bikes/addBike', async (newBike) => {
  const response = await axios.post(API_URL, newBike);
  return response.data;
});

// Thunk để xóa xe đạp
export const deleteBike = createAsyncThunk('bikes/deleteBike', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

// Thunk để sửa xe đạp
export const updateBike = createAsyncThunk('bikes/updateBike', async (updatedBike) => {
  const response = await axios.put(`${API_URL}/${updatedBike.id}`, updatedBike);
  return response.data;
});

// Thunk để đổi trạng thái "tim" trên server
export const toggleHeart = createAsyncThunk('bikes/toggleHeart', async (id, { getState }) => {
  const bike = getState().bikes.list.find((bike) => bike.id === id);
  if (bike) {
    const updatedBike = { ...bike, heart: !bike.heart };
    const response = await axios.put(`${API_URL}/${id}`, updatedBike);
    return response.data;
  }
});

const bikeSlice = createSlice({
  name: 'bikes',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBikes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBikes.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchBikes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addBike.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(deleteBike.fulfilled, (state, action) => {
        state.list = state.list.filter((bike) => bike.id !== action.payload);
      })
      .addCase(updateBike.fulfilled, (state, action) => {
        const index = state.list.findIndex((bike) => bike.id === action.payload.id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      })
      .addCase(toggleHeart.fulfilled, (state, action) => {
        const index = state.list.findIndex((bike) => bike.id === action.payload.id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      });
  },
});

export default bikeSlice.reducer;
