// import { apiSlice } from "../../app/api/apiSlice";
// import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";

// const postAdapter = createEntityAdapter({});
// const initialState = postAdapter.getInitialState();

// export const postApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     getPosts: builder.query({
//       query: () => "/posts",
//       validateStatus: (response, result) =>
//         response.status === 200 && !result.isError,
//       transformResponse: (response, meta, arg) => {
//         console.log("arg in post api");
//         console.log(arg);

//         const loadedPosts = response.map((post) => {
//           post.id = post._id;
//           return post;
//         });

//         return postAdapter.setAll(initialState, loadedPosts);
//       },
//       providesTags: (result, error, arg) => {
//         console.log("arg in post api tags");
//         console.log(arg);
//         if (arg?.ids) {
//           return [
//             { type: "Post", id: "LIST" },
//             ...arg.ids.map((id) => ({ type: "Post", id: id })),
//           ];
//         } else {
//           return [{ type: "Post", id: "LIST" }];
//         }
//       },
//     }),
//     addPost: builder.mutation({
//       query: (postData) => ({
//         url: "/post",
//         method: "POST",
//         body: { ...postData },
//       }),
//       providesTags: (result, error, arg) => {
//         return [{ type: "Post", id: arg.id }];
//       },
//     }),
//   }),
// });

// export const { useGetPostsQuery, useAddPostMutation } = postApiSlice;

// const selectPostResult = postApiSlice.endpoints.getPosts.select();

// const selectPostsData = createSelector(
//   selectPostResult,
//   (postResult) => postResult.data
// );

// export const {
//   selectById: selectPostById,
//   selectAll: selectAllPosts,
//   selectIds: selectPostIds,
//   selectEntities: selectPostEntities,
// } = postAdapter.getSelectors((state) => selectPostsData(state) ?? initialState);
