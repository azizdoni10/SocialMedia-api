import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { baseUrl } from "../../utils/baseUrl";

interface GetPoster {
    status: number;
    message: any;
  }
  
  interface PostPoster {
    user_id: number;
    main_text: string;
    photo_file: string;
  }
  
  interface ChangePoster {}
  
  interface DeletePoster {
    status: number;
    message: string;
  }

  export const postApi = createApi({
    reducerPath: "postApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
      GetPoster: builder.query<GetPoster, string>({
        query: (poster) => `/poster/${poster}`,
      }),
      PostPoster: builder.query<PostPoster, string>({
        query: (poster) => `/poster/${poster}`,
      }),
      DeletePoster: builder.query<DeletePoster, string>({
        query: (poster) => `/poster/${poster}`,
      }),
      ChangePoster: builder.query<ChangePoster, string>({
        query: (poster) => `/poster/${poster}`,
      }),
    }),
  });
  