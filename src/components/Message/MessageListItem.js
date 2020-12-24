import React from "react";
import styled from "styled-components";
import { ListItem, Divider, ListItemText, Typography } from "@material-ui/core";

const MessageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MessageTitle = styled.div`
  width: 50%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MessageDateInfo = styled.div``;

const Excerpt = styled.div`
  height: 36px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default function MessageListItem({ message, selected }) {
  const { title, date, text } = message;

  return (
    <>
      <Divider />
      <ListItem alignItems="flex-start" button selected={selected}>
        <ListItemText
          primary={
            <React.Fragment>
              <MessageHeader>
                <MessageTitle>
                  <Typography component="span" variant="subtitle1">
                    {title}
                  </Typography>
                </MessageTitle>
                <MessageDateInfo>
                  <Typography component="span" variant="subtitle2">
                    {date}
                  </Typography>
                </MessageDateInfo>
              </MessageHeader>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Excerpt>
                <Typography variant="body">{text}</Typography>
              </Excerpt>
            </React.Fragment>
          }
        />
      </ListItem>
    </>
  );
}
