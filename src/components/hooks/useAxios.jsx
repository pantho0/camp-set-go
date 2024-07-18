import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://campers-shop-backend-six.vercel.app/api/v1",
  withCredentials: true,
});

const useAxios = () => {
  return axiosPublic;
};

export default useAxios;
