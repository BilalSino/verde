import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { AiFillEdit } from 'react-icons/ai';
import { BiLeftArrowAlt, BiTrash } from 'react-icons/bi';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button } from '~/components/Button';
import { ButtonLink } from '~/components/ButtonLink';
import {
  useDeletePostMutation,
  useGetPostCommentsQuery,
  useGetPostQuery,
} from '~/redux/stores/services/post';
import { usePost } from '~/redux/stores/slices/post/hooks';

function Post() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading: isLoadingPost, data: responsePost } = useGetPostQuery(
    Number(id ?? '')
  );
  const { isLoading: isLoadingComments, data: responseComments } =
    useGetPostCommentsQuery(Number(id));
  const postData = usePost(Number(id));
  const [deletePost, { isSuccess }] = useDeletePostMutation();
  const data = responsePost ?? postData;
  useEffect(() => {
    if (isSuccess) {
      toast.success('Post successfully deleted');
      navigate('/posts');
    }
  }, [isSuccess, navigate]);
  return !isLoadingPost && !isLoadingComments ? (
    <div>
      <div className="flex justify-between items-center py-2">
        <Link className="flex gap-2 items-center text-2xl" to="/posts">
          <span className="flex items-center justify-center text-white h-7 w-7 rounded-full bg-blue-600">
            <BiLeftArrowAlt />
          </span>
          Posts
        </Link>
        <div className="flex items-center gap-5">
          <Button
            icon={<BiTrash />}
            label="Delete"
            onClick={() => deletePost(Number(id))}
            className="bg-red-600"
          />
          <ButtonLink
            icon={<AiFillEdit />}
            label="Update"
            link={`/update/post/${id}`}
          />
        </div>
      </div>
      <h2 className="text-2xl font-semibold mt-5">{data?.title}</h2>
      <p className="p-2 mb-2 text-zinc-600">{data?.body}</p>
      <hr />
      <div className="p-2">
        <h2 className="p-2 text-2xl font-semibold">Comments</h2>
        <div className="grid gap-4">
          {responseComments?.map((comment) => (
            <div key={comment.name} className="border p-2">
              <h6 className="text-xl font-semibold">{comment.name}</h6>
              <p className="text-zinc-600 p-2">{comment.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : null;
}

export { Post };
