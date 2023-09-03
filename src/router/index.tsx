import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Home } from '../pages/Home';
import { Posts } from '../pages/Posts';
import { Post } from '~/pages/Post';
import { Post as CreatePost } from '~/pages/Create/Post';
import { Post as UpdatePost } from '~/pages/Update/Post';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'posts',
        element: <Posts />,
      },
      {
        path: 'post/:id',
        element: <Post />,
      },
      {
        path: 'create',
        children: [
          {
            path: 'post',
            element: <CreatePost />,
          },
        ],
      },
      {
        path: 'update',
        children: [
          {
            path: 'post/:id',
            element: <UpdatePost />,
          },
        ],
      },
    ],
  },
]);

export { router };
