import API from "@/services/api";

export const getToken = async () => {
  const res = await API.get("/auth/token"); // backend me ye endpoint hoga
  return res.data;
};
