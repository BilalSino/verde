import { useEffect } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import { BiSolidBellRing } from 'react-icons/bi';
import { PiSquaresFourFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { useGetPostsQuery } from '~/redux/stores/services/post';
import { setPosts } from '~/redux/stores/slices/post/actions';
import { usePosts } from '~/redux/stores/slices/post/hooks';
function Header() {
  const { isLoading, data } = useGetPostsQuery();
  const { data: postData } = usePosts();
  useEffect(() => {
    setPosts(data ?? []);
  }, [data]);
  return !isLoading ? (
    <header className="flex justify-between bg-white px-5 py-4 rounded shadow">
      <Link to="/" className="flex items-center gap-3">
        <span className="text-4xl text-blue-800">
          <AiFillPlayCircle />
        </span>
        <h1 className="font-semibold text-2xl">Arbit Blog</h1>
      </Link>

      <div className="flex items-center gap-5">
        <div className="relative">
          <span className="absolute -top-4 -right-2 text-xs flex items-center justify-center bg-green-300 text-green-800 w-5 h-5 rounded-full">
            {postData?.length}
          </span>
          <Link to="posts">Posts</Link>
        </div>
        <button className="text-2xl text-gray-500">
          <BiSolidBellRing />
        </button>
        <button className="text-2xl text-gray-500">
          <PiSquaresFourFill />
        </button>
        <button className="h-10 w-10 rounded-full overflow-hidden">
          <img
            className="object-cover"
            src="https://i.pravatar.cc/40"
            alt="Avatar"
          />
        </button>
      </div>
    </header>
  ) : null;
}

export { Header };
