import { FormEvent, useEffect } from 'react';
import toast from 'react-hot-toast';
import { AiFillSave } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '~/components/Button';
import { Input } from '~/components/Input';
import { Textarea } from '~/components/Textarea';
import {
  useGetPostQuery,
  useUpdatePostMutation,
} from '~/redux/stores/services/post';
import { PostType } from '~/types';

function Post() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoading, data } = useGetPostQuery(Number(id));
  const [updatePost, { isSuccess }] = useUpdatePostMutation();
  useEffect(() => {
    if (isSuccess) {
      toast.success('Post successfuly updated');
      navigate('/posts');
    }
  }, [isSuccess, navigate]);
  if (!id) return null;
  const submitHandle = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data: PostType = {
      id: Number(id),
      title: formData.get('title') as string,
      body: formData.get('detail') as string,
      userId: 1,
    };
    if (data.title === '' || data.body === '') {
      toast.error('Please fill in all the blank spaces.');
      return;
    }
    try {
      await updatePost(data);
    } catch (error) {
      toast.error(`Error: ${error}`);
    }
  };

  return !isLoading ? (
    <div>
      <form onSubmit={submitHandle} className="grid" action="">
        <Input
          title="Title"
          name="title"
          placeholder="Please write the title"
          value={data?.title}
        />
        <Textarea
          title="Detail"
          name="detail"
          placeholder="Please write the detail"
          value={data?.body}
        />
        <div className="flex justify-end my-5">
          <Button label="Save" icon={<AiFillSave />} />
        </div>
      </form>
    </div>
  ) : null;
}

export { Post };
