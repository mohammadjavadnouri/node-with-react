import api from "../axiosConfig";

export const postStripe = async (data) => {
  try {
    const res = await api.post("/stripe", data);
    return res?.data;
  } catch (error) {}
};
