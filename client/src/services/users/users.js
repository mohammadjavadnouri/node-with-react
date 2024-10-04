import api from "../axiosConfig";

export const getCurrentUser = async () => {
  try {
    const res = await api.get("user/current");
    return res?.data;
  } catch (error) {}
};

export const getUserLogout = async () => {
  try {
    const res = await api.get("user/logout");
    return res?.data;
  } catch (error) {}
};
