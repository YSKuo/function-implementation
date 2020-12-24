import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addReply } from "../../redux/reducers/postReducer";
import styled from "styled-components";
import { TextField, IconButton } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const InputForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const StyledTextField = styled(TextField)`
  && {
    background-color: ${(props) => props.theme.color.white};
    width: 100%;
  }
`;

const IconButtonContainer = styled.div`
  height: 100%;
  ${"" /* 設定高度以免被拉長 */}
`;

export default function ReplyForm({ id }) {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const handleClick = useCallback(
    (e) => {
      e.preventDefault();

      if (!text) {
        // input 沒有值則直接 return
        console.log("empty input");
        return;
      }
      dispatch(addReply({ id, text }));
      setText("");
    },
    [id, dispatch, text, setText]
  );

  return (
    <InputForm>
      <StyledTextField
        label="請輸入留言..."
        multiline
        value={text}
        variant="outlined"
        onChange={(e) => setText(e.target.value)}
      />
      <IconButtonContainer>
        <IconButton onClick={handleClick}>
          <PlayArrowIcon />
        </IconButton>
      </IconButtonContainer>
    </InputForm>
  );
}
