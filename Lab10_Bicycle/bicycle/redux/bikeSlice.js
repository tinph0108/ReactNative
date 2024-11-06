import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://672ad353976a834dd0248031.mockapi.io/bike/bike';

// Async thunk để lấy dữ liệu
export const fetchBikes = createAsyncThunk('bikes/fetchBikes', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

// Async thunk để cập nhật trạng thái "heart"
export const toggleHeart = createAsyncThunk(
  'bikes/toggleHeart',
  async ({ id, currentHeartState }) => {
    const response = await axios.put(`${API_URL}/${id}`, { heart: !currentHeartState });
    return response.data;
  }
);

const bikeSlice = createSlice({
  name: 'bikes',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
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
      .addCase(toggleHeart.fulfilled, (state, action) => {
        const index = state.list.findIndex((bike) => bike.id === action.payload.id);
        if (index !== -1) {
          state.list[index].heart = action.payload.heart;
        }
      });
  },
});

export default bikeSlice.reducer;
