import React from "react";
import styled from "styled-components";
import { Divider, Typography } from "@material-ui/core";

const NoContentContainer = styled.div`
  height: 50vh;
  margin: 36px 0;
  text-align: center;
`;

const StyledDivider = styled(Divider)`
  && {
    background-color: ${(props) => props.theme.color.darkGray};
  }
`;

const NoContentText = styled.div`
  margin: 36px 0;
  color: ${(props) => props.theme.color.darkGray};
`;

export default function NoContentMessage() {
  return (
    <>
      <NoContentContainer>
        <StyledDivider />
        <NoContentText>
          <Typography variant="body1">目前沒有訊息</Typography>
        </NoContentText>
      </NoContentContainer>
    </>
  );
}
