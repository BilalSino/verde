import { PostType } from '~/types';
import { store } from '../..';
import { _addPost, _setPosts } from '.';

export const setPosts = (value: PostType[]) => store.dispatch(_setPosts(value));
export const addPost = (value: PostType) => store.dispatch(_addPost(value));
