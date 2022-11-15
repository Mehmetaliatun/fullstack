import axios from "axios";
const BASE_URL = "https://clarusway.pythonanywhere.com/";

const login = async (userInfo) => {
  try {
    const { data } = await axios.post(
      `${BASE_URL}account/auth/login/`,
      userInfo
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
