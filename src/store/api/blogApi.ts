import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BlogPost, CreateBlogPostRequest } from '@/types/blog';

export interface PaginationParams {
  _page: number;
  _limit: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  totalCount: number;
}

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
    getPosts: builder.query<PaginatedResponse<BlogPost>, PaginationParams>({
      query: (params) => ({
        url: '/posts',
        params,
      }),
      transformResponse: (response: any[], meta) => {
        const totalCount = Number(meta?.response?.headers.get('x-total-count') || 0);
        
        const transformedPosts = response.map(post => ({
          id: post.id,
          title: post.title,
          author: post.userId ? `Author ${post.userId}` : 'Unknown Author',
          body: post.body,
          excerpt: post.body.substring(0, 100) + '...'
        }));

        return {
          data: transformedPosts,
          totalCount
        };
      },
      providesTags: (result) => 
        result?.data
          ? [
              ...result.data.map(({ id }) => ({ type: 'Posts' as const, id })),
              { type: 'Posts', id: 'LIST' }
            ]
          : [{ type: 'Posts', id: 'LIST' }]
    }),
    getPostById: builder.query<BlogPost, number>({
      query: (id) => `/posts/${id}`,
      transformResponse: (post: any) => ({
        id: post.id,
        title: post.title,
        author: post.userId ? `Author ${post.userId}` : 'Unknown Author',
        body: post.body,
        excerpt: post.body.substring(0, 100) + '...'
      }),
      providesTags: (_result, _error, id) => [{ type: 'Posts', id }]
    }),
    createPost: builder.mutation<BlogPost, CreateBlogPostRequest>({
      query: (newPost) => ({
        url: '/posts',
        method: 'POST',
        body: newPost
      }),
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }]
    })
  })
});

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useCreatePostMutation
} = blogApi;