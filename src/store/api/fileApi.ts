import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { baseUrl } from "../../utils/baseUrl";

interface PostPhoto {
    post_id: number;
    photo_file: string;
  }
  
  interface GetPhoto {}
  
  interface ChangePhoto {
    photo_id: number;
    photo_file: string;
  }
  
  interface DeletePhoto {}

export const fileApi = createApi({
    reducerPath: "fileApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
      PostPhoto: builder.query<PostPhoto, string>({
        query: (photo) => `/photo/${photo}`,
      }),
      ChangePhoto: builder.query<ChangePhoto, string>({
        query: (photo) => `/photo/${photo}`,
      }),
      GetPhoto: builder.query<GetPhoto, string>({
        query: (photo) => `/photo/${photo}`,
      }),
      DeletePhoto: builder.query<DeletePhoto, string>({
        query: (photo) => `/photo/${photo}`,
      }),
    }),
  });
  