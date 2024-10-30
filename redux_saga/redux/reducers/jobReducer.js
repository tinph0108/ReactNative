// redux/reducers/jobReducer.js

import {
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE,
  DELETE_JOB_SUCCESS,
   CREATE_JOB_SUCCESS,
  CREATE_JOB_FAILURE,
  UPDATE_JOB_SUCCESS,
  UPDATE_JOB_FAILURE,
} from '../actions/jobActions';

// Trạng thái ban đầu của reducer
const initialState = {
  jobs: [],
  loading: false,
  error: null,
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_JOBS_SUCCESS:
      return { ...state, loading: false, jobs: action.payload };
    case FETCH_JOBS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case DELETE_JOB_SUCCESS:
      return {
        ...state,
        jobs: state.jobs.filter((job) => job.id !== action.payload),
      };
    case CREATE_JOB_SUCCESS:
      return { ...state, jobs: [...state.jobs, action.payload] };
    case UPDATE_JOB_SUCCESS:
      return {
        ...state,
        jobs: state.jobs.map((job) => (job.id === action.payload.id ? action.payload : job)), // Cập nhật công việc đã chỉnh sửa
      };
    case CREATE_JOB_FAILURE:
    case UPDATE_JOB_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default jobReducer;
