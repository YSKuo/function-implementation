import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { List, Typography, IconButton, Hidden } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import MessageListItem from "./MessageListItem";
import { MEDIA_QUERY_LG, PAGE_HEIGHT } from "../../constants/style";

const ListContainer = styled.div`
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

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
`;

const ListTitle = styled(Typography)`
  && {
    font-size: 
    color: ${(props) => props.theme.color.darkGray};
  }
`;

const Sort = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export default function MessageList({ messages, paramsId }) {
  return (
    <ListContainer paddingAtPhoneSize="8px" paddingAtDeskTopSize="16px">
      <ListHeader button>
        <ListTitle variant="h5">訊息列表</ListTitle>
        {/* Sort 功能尚未完成 */}
        <Sort>
          <Hidden only="xs">
            <Typography variant="caption">時間排序</Typography>
          </Hidden>
          <IconButton>
            <ArrowDownwardIcon />
          </IconButton>
        </Sort>
      </ListHeader>
      <List>
        {messages.map((message) => (
          <StyledLink to={`/messages/${message.id}`}>
            <MessageListItem
              key={message.id}
              message={message}
              selected={paramsId === message.id}
            />
          </StyledLink>
        ))}
      </List>
    </ListContainer>
  );
}
