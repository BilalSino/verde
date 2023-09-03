import { Link } from 'react-router-dom';
import { PostType } from '~/types';

function Post({ id, title, body }: PostType) {
  return (
    <Link to={`/post/${id}`} className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold line-clamp-1">{title}</h2>
      <p className="text-zinc-500 line-clamp-4">{body}</p>
    </Link>
  );
}

export { Post };
