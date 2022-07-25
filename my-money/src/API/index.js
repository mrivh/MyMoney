import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "./config";

export const apiRequest = async ({ method, url, data, sendToken = true }) => {
  let userInfo = await AsyncStorage.getItem("userInfo");
  if (sendToken) {
    return axios({
      baseURL: BASE_URL,
      method,
      url,
      data,
      headers: { Authorization: "Bearer " + userInfo },
    });
  }
  return axios({
    baseURL: BASE_URL,
    method,
    url,
    data,
  });
};
