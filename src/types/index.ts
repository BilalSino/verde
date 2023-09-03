export interface PostType {
  id: number;
  title: string;
  body: string;
  userId?: number;
}

export interface RequestPostType {
  title: string;
  body: string;
  userId?: number;
}

export interface CommentType {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}
