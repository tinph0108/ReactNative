// recoil/jobAtom.js
import { atom, selector } from 'recoil';
import axios from 'axios';

// API URL
const apiUrl = 'https://67219efe98bbb4d93ca8ffaf.mockapi.io/job/job';

// Atom lưu trữ danh sách công việc
export const jobListState = atom({
  key: 'jobListState',
  default: [],
});

// Selector để lấy dữ liệu từ API và cập nhật vào atom
export const fetchJobList = selector({
  key: 'fetchJobList',
  get: async ({ get }) => {
    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      console.error("Error fetching jobs:", error);
      return [];
    }
  },
});
