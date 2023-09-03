import { FormEvent, useEffect } from 'react';
import toast from 'react-hot-toast';
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { Button } from '~/components/Button';
import { Input } from '~/components/Input';
import { Textarea } from '~/components/Textarea';
import { useCreatePostMutation } from '~/redux/stores/services/post';
import { addPost } from '~/redux/stores/slices/post/actions';
import { RequestPostType } from '~/types';

function Post() {
  const navigate = useNavigate();
  const [createPost, { data: responseData, isSuccess }] =
    useCreatePostMutation();
  const submitHandle = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data: RequestPostType = {
      title: formData.get('title') as string,
      body: formData.get('detail') as string,
    };
    if (data.title === '' || data.body === '') {
      toast.error('Please fill in all the blank spaces.');
      return;
    }
    try {
      await createPost(data);
    } catch (error) {
      toast.error(`Error: ${error}`);
    }
  };
  useEffect(() => {
    if (responseData) {
      addPost(responseData);
    }
  }, [responseData]);
  useEffect(() => {
    if (isSuccess) {
      toast.success('Post successfuly created');
      navigate('/posts');
    }
  }, [isSuccess, navigate]);
  return (
    <div>
      <form onSubmit={submitHandle} className="grid" action="">
        <Input
          title="Title"
          name="title"
          placeholder="Please write the title"
        />
        <Textarea
          title="Detail"
          name="detail"
          placeholder="Please write the detail"
        />
        <div className="flex justify-end my-5">
          <Button label="Create" icon={<AiOutlinePlus />} onClick={() => {}} />
        </div>
      </form>
    </div>
  );
}

export { Post };
