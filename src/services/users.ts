import API from "@/services/api";

export const signUp = async (data: { email: string; password: string }) => {
  const res = await API.post("/auth/signup", data); // backend me signup route
  return res.data;
};
