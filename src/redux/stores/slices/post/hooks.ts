import { useAppSelector } from '../../hooks';

export const usePosts = () => useAppSelector((state) => state.post);
export const usePost = (id: number) =>
  useAppSelector((state) => state.post.data.filter((p) => p.id === id)[0]);
