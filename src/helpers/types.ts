export enum ADMIN_ROLE {
  normalAdmin = "Admin",
  superAdmin = "Super admin",
}

export interface BaseSliceValue {
  user: number | null;
  loading: boolean;
  token: string | null;
  role: ADMIN_ROLE | null;
}

export interface StateValue {
  base: BaseSliceValue;
}

export interface RolePayload {
  payload: ADMIN_ROLE | null;
  type: string;
}

export interface TokenPayload {
  payload: string | null;
  type: string;
}

export interface SetBooleanPayload {
  payload: boolean;
  type: string;
}

export interface SetUserPayload {
  payload: number | null;
  type: string;
}

export interface LoginPayload {
  email: string;
  role: string;
}

export interface Post {
  userId?: number;
  id: number;
  title: string;
  body: string;
}

export interface SinglePost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
