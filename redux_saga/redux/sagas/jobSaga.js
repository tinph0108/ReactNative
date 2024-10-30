// redux/sagas/jobSaga.js

import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_JOBS_REQUEST,
  fetchJobsSuccess,
  fetchJobsFailure,
  DELETE_JOB_REQUEST,
  deleteJobSuccess,
  deleteJobFailure,
   CREATE_JOB_REQUEST,
  createJobSuccess,
  createJobFailure,
  UPDATE_JOB_REQUEST,
  updateJobSuccess,
  updateJobFailure,
} from '../actions/jobActions';

// Hàm worker để lấy danh sách công việc
function* fetchJobs() {
  try {
    const response = yield call(axios.get, 'https://67219efe98bbb4d93ca8ffaf.mockapi.io/job/job');
    yield put(fetchJobsSuccess(response.data));
  } catch (error) {
    yield put(fetchJobsFailure(error.message));
  }
}

// Hàm worker để xoá công việc
function* deleteJob(action) {
  try {
    yield call(axios.delete, `https://67219efe98bbb4d93ca8ffaf.mockapi.io/job/job/${action.payload}`);
    yield put(deleteJobSuccess(action.payload));
  } catch (error) {
    yield put(deleteJobFailure(error.message));
  }
}
function* createJob(action) {
  try {
    const response = yield call(axios.post, 'https://67219efe98bbb4d93ca8ffaf.mockapi.io/job/job', { title: action.payload });
    yield put(createJobSuccess(response.data));
  } catch (error) {
    yield put(createJobFailure(error.message));
  }
}
// Saga watcher
export function* watchJobSaga() {
  yield takeLatest(FETCH_JOBS_REQUEST, fetchJobs);
  yield takeLatest(DELETE_JOB_REQUEST, deleteJob);
  yield takeLatest(CREATE_JOB_REQUEST, createJob); 
  yield takeLatest(UPDATE_JOB_REQUEST, updateJob);

}
function* updateJob(action) {
  try {
    const { id, title } = action.payload;
    const response = yield call(axios.put, `https://67219efe98bbb4d93ca8ffaf.mockapi.io/job/job/${id}`, { title });
    yield put(updateJobSuccess(response.data));
  } catch (error) {
    yield put(updateJobFailure(error.message));
  }
}
