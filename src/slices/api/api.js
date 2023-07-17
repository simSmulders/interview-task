import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({

  reducerPath: 'api',

  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/'}),

  tagTypes: [

  ],

  endpoints: builder => ({

    getPosts: builder.query({
      query: () => 'posts'
    }),

    getPostById: builder.query({
      query: ({ postId }) => `posts/${postId}`
    }),

    patchVideoAt40Pct: builder.mutation({
      query: ({ userId, videoId }) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
        body: {
          videoId
        }
      })
    }),

    patchVideoFinished: builder.mutation({
      query: ({ userId, videoId }) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
        body: {
          videoId
        }
      })
    })

  })

});

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  usePatchVideoAt40PctMutation,
  usePatchVideoFinishedMutation
} = api

export default api;