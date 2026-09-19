export interface Post {
  id: number;
  title: string;
}

export interface PostsState {
  data: Post[];
  loading: boolean;
  error: string | null;
}
