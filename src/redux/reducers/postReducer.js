import { createSlice } from "@reduxjs/toolkit";

// 留言板功能的 reducer
// posts 為一陣列，裡面放入個別的留言(post)
// 每個留言都是一個 obejct，有 id, comment, replys

// 因是簡化展示功能，這邊將 id 簡化為流水號，如需更嚴謹的 id 可考慮引入 nanoid
let nextPostId = 0;

const postSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    addPost: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      // 每次傳入新的留言都在 prepare 這邊把 id 放進來
      prepare: (text) => {
        return { payload: { id: nextPostId++, comment: text, replys: [] } };
      },
    },
    deletePost: (state, action) => {
      const postIndex = state.findIndex((post) => post.id === action.payload);
      state.splice(postIndex, 1);
    },
    addReply: (state, action) => {
      const { id, text } = action.payload;
      const post = state.find((post) => post.id === id);
      if (post) {
        post.replys.push(text);
      }
    },
  },
});

export const { addPost, deletePost, addReply } = postSlice.actions;
export default postSlice.reducer;
