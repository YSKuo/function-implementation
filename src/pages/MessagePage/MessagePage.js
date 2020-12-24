import React, { memo } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Hidden } from "@material-ui/core";
import Container from "../../components/Container";
import MessageList from "../../components/Message/MessageList";
import Message from "../../components/Message/Message";
import dummyMessages from "../../dummyMessages"; // 測試 message 功能用的假資料

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: ${(props) => props.theme.color.darkGray};
`;

function MessagePage() {
  const { id } = useParams();

  return (
    <Container maxWidthAtPhoneSize="100vw" maxWidthAtDeskTopSize="60vw">
      <ContentContainer>
        {id ? ( // 有 id 的話代表有選到特定訊息
          <>
            <Hidden xsDown>
              <MessageList messages={dummyMessages} paramsId={Number(id)} />
            </Hidden>
            {/* 有 id 的情況下顯示特定 id 的 message */}
            <Message
              message={dummyMessages.find(
                (message) => message.id === Number(id)
              )}
            />
          </>
        ) : (
          <>
            <MessageList
              messages={dummyMessages}
              paramsId={dummyMessages[0][id]}
            />
            <Hidden only="xs">
              {/* 沒有 id 的話就預設顯示第一個 message */}
              <Message message={dummyMessages[0]} />
            </Hidden>
          </>
        )}
      </ContentContainer>
    </Container>
  );
}

export default memo(MessagePage);
