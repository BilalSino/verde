import { Link } from 'react-router-dom';
import { usePosts } from '~/redux/stores/slices/post/hooks';

function Home() {
  const { data } = usePosts();
  return (
    <div>
      <Link
        className="flex items-center justify-between bg-zinc-100 p-5 text-xl font-semibold rounded"
        to="/posts"
      >
        Posts
        <span className="flex items-center justify-center h-10 w-10 bg-zinc-300 rounded text-base text-green-700 font-semibold">
          {data.length}
        </span>
      </Link>
    </div>
  );
}

export { Home };
