import React from "react";
import styled from "styled-components";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import BoardPage from "../../pages/BoardPage";
import MessagePage from "../../pages/MessagePage";
import UploadImagePage from "../../pages/UploadImagePage";

const Root = styled.div`
  padding-top: 64px;
`;

export default function App() {
  return (
    <Root>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <BoardPage />
          </Route>
          <Route exact path="/messages">
            <MessagePage />
          </Route>
          <Route path="/messages/:id">
            <MessagePage />
          </Route>
          <Route path="/upload-image">
            <UploadImagePage />
          </Route>
        </Switch>
      </Router>
    </Root>
  );
}
