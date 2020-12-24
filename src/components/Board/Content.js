import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import NoContentMessage from "./NoContentMessage";
import Post from "./Post";

const Posts = styled.div`
  height: 50vh;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export default function Content() {
  const posts = useSelector((store) => store.posts);

  return (
    <>
      {
        // 由 posts 裡面是否有留言來進行顯示 NoContentMessage 或 Posts
        posts.length === 0 ? (
          <NoContentMessage />
        ) : (
          <Posts>
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </Posts>
        )
      }
    </>
  );
}
