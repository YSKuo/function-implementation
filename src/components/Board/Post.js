import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../redux/reducers/postReducer";
import styled from "styled-components";
import { Typography, IconButton, Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ReplyForm from "./ReplyForm";
import Reply from "./Reply";
import { MEDIA_QUERY_MD } from "../../constants/style";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0;
  padding: ${(props) => props.paddingAtPhoneSize};
  background-color: ${(props) => props.theme.color.lightGray};
  color: ${(props) => props.theme.color.darkGray};
  border-radius: 12px;

  ${MEDIA_QUERY_MD} {
    padding: ${(props) => props.paddingAtDeskTopSize};
  }
`;

const FirstComment = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;

  ${MEDIA_QUERY_MD} {
    flex-direction: row;
  }
`;

const CommentText = styled.div`
  width: inherit;

  margin: 12px 0;
  padding: 0 12px;
  color: ${(props) => props.theme.color.darkGray};
  white-space: pre-wrap;
`;

const StyledButton = styled(Button)`
  && {
    align-self: flex-end;
    color: ${(props) => props.theme.color.white};
  }
`;

const IconButtonContainer = styled.div`
  height: 100%;
  ${"" /* 設定高度以免被拉長 */}

  align-self: flex-end;

  ${MEDIA_QUERY_MD} {
    align-self: flex-start;
  }
`;

export default function Post({ post }) {
  const [inputIsShown, setInputIsShown] = useState(false);
  const { id, comment, replys } = post;
  const dispatch = useDispatch();

  const handleToggleInput = useCallback(() => {
    setInputIsShown(!inputIsShown);
  }, [inputIsShown, setInputIsShown]);

  const handleDelete = useCallback(() => {
    dispatch(deletePost(id));
  }, [dispatch, deletePost, id]);

  return (
    <PostContainer paddingAtPhoneSize="8px" paddingAtDeskTopSize="16px">
      <FirstComment>
        <CommentText>
          <Typography variant="body1">{comment}</Typography>
        </CommentText>
        <IconButtonContainer onClick={handleDelete}>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </IconButtonContainer>
      </FirstComment>
      <StyledButton onClick={handleToggleInput}>
        {inputIsShown ? "關閉回覆欄位" : "回覆"}
      </StyledButton>
      {inputIsShown && <ReplyForm id={id} />}
      {replys.length > 0 &&
        replys.map((reply, index) => <Reply key={index} reply={reply} />)}
    </PostContainer>
  );
}
