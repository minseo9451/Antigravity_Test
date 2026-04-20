import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 인터셉터 설정 (선택 사항: 에러 핸들링 등)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Call Error:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
