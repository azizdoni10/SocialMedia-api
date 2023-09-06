import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { baseUrl } from "../../utils/baseUrl";

interface RegistrationUserPayload {
  name: string;
  email: string;
  phone_number: string;
  password: string;
  user_city: string;
}

interface RegisterUserResponse {
  status: number;
  user_id: number;
}

interface LoginUserResponse extends RegisterUserResponse {}

interface LoginPayload {
  email: string;
  password: string;
}

interface GetUserResponse {
  status: number;
  message: {
    mail: string;
    phone_number: string;
    user_id: number;
    name: string;
    reg_date: Date;
    city: string;
  };
}

interface ChangeProfile {
  user_id: number;
  change_info: string;
  new_data: string;
}

export const AuthApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    registerUser: builder.query<RegisterUserResponse, RegistrationUserPayload>({
      query: (payload) => "/registration",
    }),
    loginUser: builder.query<LoginUserResponse, LoginPayload>({
      query: (payload) => "/login",
    }),
    getUser: builder.query<GetUserResponse, string>({
      query: (userId) => `/user/${userId}`,
    }),
    ChangeProfile: builder.query<ChangeProfile, string>({
      query: (profile) => `/profile/${profile}`,
    }),
  }),
});
