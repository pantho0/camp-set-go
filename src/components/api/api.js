import axios from "axios";
const imgAPI = "f4dbedc6e55f9c2841407646add45c1b";
const imgHostingApi = `https://api.imgbb.com/1/upload?key=${imgAPI}`;
export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image", file);
  const { data } = await axios.post(imgHostingApi, formData);

  return data.data.display_url;
};
