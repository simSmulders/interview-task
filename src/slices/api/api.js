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

  })

});

export const {
  useGetPostsQuery
} = api

export default api;