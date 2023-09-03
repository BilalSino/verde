import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Post } from '~/layouts/Post';
import { usePosts } from '~/redux/stores/slices/post/hooks';

function Posts() {
  const { data } = usePosts();

  return (
    <div className="p-5">
      <div className="flex justify-between items-center px-2 mb-5">
        <h2 className="font-semibold text-3xl">Posts</h2>
        <Link
          to="/create/post"
          className="flex items-center gap-2 bg-blue-600 text-white px-5 h-10 rounded"
        >
          <span className="text-2xl">
            <AiOutlinePlus />
          </span>
          New Post
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {data.map((post, index) => (
          <Post
            key={`${post.id}${index}`}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    </div>
  );
}

export { Posts };
