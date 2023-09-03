import { api } from './api';
import { CommentType, PostType, RequestPostType } from '~/types';

export const postsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<PostType[], void>({
      query: () => 'posts',
      providesTags: ['Posts'],
    }),
    getPost: build.query<PostType, number>({
      query: (id) => `posts/${id}`,
    }),
    getPostComments: build.query<CommentType[], number>({
      query: (id) => `posts/${id}/comments`,
    }),
    createPost: build.mutation<PostType, RequestPostType>({
      query(post) {
        return {
          url: 'posts',
          method: 'POST',
          body: post,
        };
      },
      //invalidatesTags: ['Posts'], is This not used because api doesn't really update
    }),
    updatePost: build.mutation<PostType, PostType>({
      query(post) {
        return {
          url: `posts/${post.id}`,
          method: 'PUT',
          body: post,
        };
      },
      //invalidatesTags: ['Posts'], is This not used because api doesn't really update
    }),
    deletePost: build.mutation<PostType, number>({
      query(id) {
        return {
          url: `posts/${id}`,
          method: 'DELETE',
        };
      },
      //invalidatesTags: ['Posts'], is This not used because api doesn't really update
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useGetPostCommentsQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postsApi;

export const {
  endpoints: { getPosts },
} = postsApi;
