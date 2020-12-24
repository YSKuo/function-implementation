import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/reducers/postReducer";
import styled from "styled-components";
import Button from "../Button";
import { TextField } from "@material-ui/core";

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  align-self: flex-end;
`;

export default function Form() {
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
      dispatch(addPost(text));
      setText("");
    },
    [dispatch, text, setText]
  );

  return (
    <InputForm>
      <TextField
        label="請輸入留言..."
        multiline
        rows={4}
        value={text}
        variant="outlined"
        onChange={(e) => setText(e.target.value)}
      />
      <ButtonContainer>
        <Button variant="contained" color="primary" onClick={handleClick}>
          留言
        </Button>
      </ButtonContainer>
    </InputForm>
  );
}
