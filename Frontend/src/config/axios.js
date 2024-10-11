import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "https://book-store-api-chi.vercel.app/api"
      : "/api/",
  withCredentials: true,
});

export default axiosInstance;
