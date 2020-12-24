import React, { memo } from "react";
import Container from "../../components/Container";
import CommentForm from "../../components/Board/CommentForm";
import Content from "../../components/Board/Content";

function BoardPage() {
  return (
    <Container
      maxWidthAtPhoneSize="100vw"
      maxWidthAtDeskTopSize="60vw"
      paddingAtPhoneSize="8px"
      paddingAtDeskTopSize="16px"
      defaultBorder="true"
    >
      <CommentForm />
      <Content />
    </Container>
  );
}

export default memo(BoardPage);
