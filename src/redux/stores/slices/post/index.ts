import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PostType } from '~/types';

// Define a type for the slice state
interface PostState {
  data: PostType[] | [];
}

// Define the initial state using that type
const initialState: PostState = {
  data: [],
};

export const postSlice = createSlice({
  name: 'post',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    _setPosts: (state, action: PayloadAction<PostType[]>) => {
      state.data = action.payload;
    },
    _addPost: (state, action: PayloadAction<PostType>) => {
      state.data = [...state.data, action.payload];
    },
  },
});

export const { _setPosts, _addPost } = postSlice.actions;

export default postSlice.reducer;
