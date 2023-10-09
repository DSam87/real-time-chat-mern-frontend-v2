import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const apiSlice = createApi({
//   reduxerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://localhost:3500",
//     credentials: "include",
//     // prepareHeaders: (headers, { getState }) => {
//     //   const token = getState();
//     //   console.log("token in prepareHeaders api slice");
//     //   console.log(token);

//     //   if (token) {
//     //     headers.set("authorization", `Bearer ${token}`);
//     //   }

//     //   return headers;
//     // },
//   }),
//   tagTypes: ["User", "Post"],
//   endpoints: (builder) => ({
//     getPosts: builder.query({
//       query: () => "/posts",
//     }),
//   }),
// });

// const apiSlice = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://localhost:3500",
//     credentials: "include",
//   }),
//   tagTypes: ["User", "Post"],
//   endpoints: (builder) => ({}),
// });

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["Post"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3500",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      providesTags: ["Post"],
    }),
    verifyUser: builder.mutation({
      query: (userData) => ({
        url: "/",
        method: "POST",
        body: { ...userData },
      }),
    }),
    addPost: builder.mutation({
      query: (postData) => ({
        url: "/post",
        method: "POST",
        body: { ...postData },
      }),
      invalidatesTags: ["Post"],
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: "/delete-user",
        method: "POST",
        body: { ...userId },
      }),
    }),
    addNewUser: builder.mutation({
      query: (newUserData) => ({
        url: "/signup",
        method: "POST",
        body: { ...newUserData },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "User", id: "LIST" }],
    }),
    loginUser: builder.mutation({
      query: (loginData) => ({
        url: "/login",
        method: "POST",
        body: { ...loginData },
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useVerifyUserMutation,
  useAddPostMutation,
  useDeleteUserMutation,
  useAddNewUserMutation,
  useLoginUserMutation,
} = apiSlice;

// export const apiSlice = createApi({
//   // The cache reducer expects to be added at `state.api` (already default - this is optional)
//   reducerPath: 'api',
//   // All of our requests will have URLs starting with '/fakeApi'
//   baseQuery: fetchBaseQuery({ baseUrl: '/fakeApi' }),
//   // The "endpoints" represent operations and requests for this server
//   endpoints: builder => ({
//     // The `getPosts` endpoint is a "query" operation that returns data
//     getPosts: builder.query({
//       // The URL for the request is '/fakeApi/posts'
//       query: () => '/posts'
//     })
//   })
// })

// const apiSlice = createApi({
//    baseQuery: fetchBaseQuery({ baseUrl: '/fakeApi' }),
//   tagTypes: ["User", "Group", "Item"],
//   endpoints: (build) => ({
//     getPosts: build.query({
//       query: () => "/posts"
//     })

//   }),
// });
