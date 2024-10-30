// redux/actions/jobActions.js

// Định nghĩa các action type
export const FETCH_JOBS_REQUEST = 'FETCH_JOBS_REQUEST';
export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS';
export const FETCH_JOBS_FAILURE = 'FETCH_JOBS_FAILURE';

export const DELETE_JOB_REQUEST = 'DELETE_JOB_REQUEST';
export const DELETE_JOB_SUCCESS = 'DELETE_JOB_SUCCESS';
export const DELETE_JOB_FAILURE = 'DELETE_JOB_FAILURE';

// Action creator cho việc lấy danh sách công việc
export const fetchJobsRequest = () => ({ type: FETCH_JOBS_REQUEST });
export const fetchJobsSuccess = (jobs) => ({ type: FETCH_JOBS_SUCCESS, payload: jobs });
export const fetchJobsFailure = (error) => ({ type: FETCH_JOBS_FAILURE, payload: error });

// Action creator cho việc xoá công việc
export const deleteJobRequest = (id) => ({ type: DELETE_JOB_REQUEST, payload: id });
export const deleteJobSuccess = (id) => ({ type: DELETE_JOB_SUCCESS, payload: id });
export const deleteJobFailure = (error) => ({ type: DELETE_JOB_FAILURE, payload: error });
export const CREATE_JOB_REQUEST = 'CREATE_JOB_REQUEST';
export const CREATE_JOB_SUCCESS = 'CREATE_JOB_SUCCESS';
export const CREATE_JOB_FAILURE = 'CREATE_JOB_FAILURE';

// Action creator cho việc tạo công việc mới
export const createJobRequest = (title) => ({
  type: CREATE_JOB_REQUEST,
  payload: title,
});

export const createJobSuccess = (job) => ({
  type: CREATE_JOB_SUCCESS,
  payload: job,
});

export const createJobFailure = (error) => ({
  type: CREATE_JOB_FAILURE,
  payload: error,
});

export const UPDATE_JOB_REQUEST = 'UPDATE_JOB_REQUEST';
export const UPDATE_JOB_SUCCESS = 'UPDATE_JOB_SUCCESS';
export const UPDATE_JOB_FAILURE = 'UPDATE_JOB_FAILURE';

// Action creator cho việc cập nhật công việc
export const updateJobRequest = (id, title) => ({
  type: UPDATE_JOB_REQUEST,
  payload: { id, title },
});

export const updateJobSuccess = (job) => ({
  type: UPDATE_JOB_SUCCESS,
  payload: job,
});

export const updateJobFailure = (error) => ({
  type: UPDATE_JOB_FAILURE,
  payload: error,
});