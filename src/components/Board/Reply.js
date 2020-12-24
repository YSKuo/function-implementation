import React from "react";
import styled from "styled-components";
import { Typography, Divider } from "@material-ui/core";

const StyledDivider = styled(Divider)`
  && {
    margin: 12px 0;
    background-color: ${(props) => props.theme.color.white};
  }
`;

const ReplyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  white-space: pre-wrap;
`;

const ContentText = styled.div`
  margin: 12px 0;
  padding: 0 12px;
  color: ${(props) => props.theme.color.darkGray};
`;

export default function Reply({ reply }) {
  return (
    <>
      <StyledDivider />
      <ReplyContainer>
        <ContentText>
          <Typography variant="body1">{reply}</Typography>
        </ContentText>
      </ReplyContainer>
    </>
  );
}
