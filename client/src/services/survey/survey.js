import api from "../axiosConfig";

export const postSurvey = async (data) => {
  try {
    const res = await api.post("/survey", data);
    return res;
  } catch (error) {}
};

export const getSurveys = async (data) => {
  try {
    const res = await api.get("/survey/all", data);
    return res;
  } catch (error) {}
};
