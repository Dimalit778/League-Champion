import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
ISO_URL = 'http://localhost:3000/auth';
ANDROID_URL = 'http://10.0.2.2:3000/auth';

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({ baseUrl: `${ANDROID_URL}` }),
  endpoints: (builder) => ({
    // Get All Users
    getAll: builder.query({
      query: () => 'getAll',
    }),
    // Get user
    getUser: builder.query({
      query: (id) => `getUser/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllQuery, useGetUserQuery } = userApi;
