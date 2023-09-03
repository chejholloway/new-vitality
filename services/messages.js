import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'messagesApi',
  baseQuery: fetchBaseQuery({ baseUrl: './messages.json' }),
  endpoints: (builder) => ({
    listPosts: builder.query({
      query: (page = 1) => `messages?page=${page}`,
    }),
  }),
})

export const { useListMessagesQuery } = messagesApi