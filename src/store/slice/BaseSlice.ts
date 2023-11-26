import { createSlice } from "@reduxjs/toolkit";
import {
  ADMIN_ROLE,
  BaseSliceValue,
  RolePayload,
  SetBooleanPayload,
  SetUserPayload,
  TokenPayload,
} from "../../helpers/types";

const initialState: BaseSliceValue = {
  user: null,
  token: null,
  loading: false,
  role: ADMIN_ROLE.normalAdmin,
};

export const BaseSlice = createSlice({
  name: "base",
  initialState,
  reducers: {
    setUser: (state, action: SetUserPayload) => {
      state.user = action.payload;
    },
    setLoading: (state, action: SetBooleanPayload) => {
      state.loading = action.payload;
    },
    setToken: (state, action: TokenPayload) => {
      state.token = action.payload;
    },
    setRole: (state, action: RolePayload) => {
      state.role = action.payload;
    },
  },
});

export const { setUser, setLoading, setToken, setRole } = BaseSlice.actions;
export default BaseSlice.reducer;
