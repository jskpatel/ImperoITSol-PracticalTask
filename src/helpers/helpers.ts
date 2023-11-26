import { store } from "../store/store";

export const getToken = (): string | null => {
  return store?.getState()?.base?.token;
};

export const checkAdminAuth = () => {
  const token = getToken();
  return Boolean(token);
};
