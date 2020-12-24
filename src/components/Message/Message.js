import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { Typography, Button, Hidden } from "@material-ui/core";
import { MEDIA_QUERY_LG, PAGE_HEIGHT } from "../../constants/style";

const MessageContainer = styled.div`
  flex: 1;
  padding: ${(props) => props.paddingAtPhoneSize};
  border: 1px solid ${(props) => props.theme.color.darkGray};
  height: ${PAGE_HEIGHT};
  overflow-x: hidden;
  overflow-y: scroll;

  ${MEDIA_QUERY_LG} {
    padding: ${(props) => props.paddingAtDeskTopSize};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Content = styled.div`
  white-space: pre-wrap;
  padding: 0 8px;
`;

const TitleContainer = styled.div`
  padding: 8px 0;
`;

export default function Message({ message }) {
  const { title, text } = message;

  return (
    <>
      <MessageContainer paddingAtPhoneSize="8px" paddingAtDeskTopSize="16px">
        <Hidden smUp>
          <StyledLink to={`/messages`}>
            <Button>返回上一頁</Button>
          </StyledLink>
        </Hidden>
        <Content>
          <TitleContainer>
            <Typography variant="h6">{title}</Typography>
          </TitleContainer>
          <Typography variant="body">{text}</Typography>
        </Content>
      </MessageContainer>
    </>
  );
}
