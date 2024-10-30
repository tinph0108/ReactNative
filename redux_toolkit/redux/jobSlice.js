// redux/jobSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://67219efe98bbb4d93ca8ffaf.mockapi.io/job/job';

// Thunk để lấy danh sách công việc
export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
  const response = await axios.get(apiUrl);
  return response.data;
});

// Thunk để xóa công việc
export const deleteJob = createAsyncThunk('jobs/deleteJob', async (id, { dispatch }) => {
  await axios.delete(`${apiUrl}/${id}`);
  dispatch(fetchJobs());
});

// Thunk để thêm hoặc cập nhật công việc
export const saveJob = createAsyncThunk('jobs/saveJob', async ({ job, title }, { dispatch }) => {
  if (job) {
    await axios.put(`${apiUrl}/${job.id}`, { title });
  } else {
    await axios.post(apiUrl, { title });
  }
  dispatch(fetchJobs());
});

const jobSlice = createSlice({
  name: 'jobs',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default jobSlice.reducer;
