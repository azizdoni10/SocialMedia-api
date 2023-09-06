import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { baseUrl } from "../../utils/baseUrl";


interface GetComment {
    text: string;
  }
  
  interface PostComment {
    post_id: number;
    user_id: number;
    text: string;
  }
  
  interface ChangeComment {
    comment_id: number;
    new_comment_text: string;
  }
  
  interface DeleteComment {}

  export const commentApi = createApi({
    reducerPath: "commentApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
      PostComment: builder.query<PostComment, string>({
        query: (comment) => `/comment/${comment}`,
      }),
      GetComment: builder.query<GetComment, string>({
        query: (comment) => `/comment/${comment}`,
      }),
      ChangeComment: builder.query<ChangeComment, string>({
        query: (comment) => `/comment/${comment}`,
      }),
      DeleteComment: builder.query<DeleteComment, string>({
        query: (comment) => `/comment/${comment}`,
      }),
    }),
  });