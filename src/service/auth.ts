import { Dispatch } from "@reduxjs/toolkit";
import { LoginPayload } from "../helpers/types";
import { NavigateFunction } from "react-router-dom";
import { setLoading, setRole, setToken } from "../store/slice/BaseSlice";
import Axios from "../config/Axios";
import { api } from "../config/api";
import { AxiosError } from "axios";

export const onLogin = async (
  payload: LoginPayload,
  dispatch: Dispatch,
  navigate: NavigateFunction
) => {
  try {
    dispatch(setLoading(true));

    console.log("login...");

    const response = await Axios.post(api.login, payload);

    const res = response.data;

    dispatch(setToken(res.data.token));

    dispatch(setRole(res.data?.admin?.role ?? null));

    navigate("/");
  } catch (error) {
    console.log(error as AxiosError);
  } finally {
    dispatch(setLoading(false));
  }
};
