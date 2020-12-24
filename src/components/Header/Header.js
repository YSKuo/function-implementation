import React, { useState, memo, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { IconButton, Menu, Hidden } from "@material-ui/core/";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { MEDIA_QUERY_SM } from "../../constants/style";

const HeaderContainer = styled.div`
  height: 64px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  border-bottom: 1px solid ${(props) => props.theme.color.lightGray2};
  background-color: ${(props) => props.theme.color.white};
  z-index: 1000;
`;

const NavbarList = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 64px;

  ${MEDIA_QUERY_SM} {
    justify-content: center;
  }
`;

const Nav = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 160px;
  box-sizing: border-box;
  cursor: pointer;
  padding: 0 24px;
  text-decoration: none;
  color: ${(props) => props.theme.color.darkGray};

  ${(props) =>
    props.$active &&
    `
    background-color: ${props.theme.color.lightGray};
  `}
`;

function NavMenu() {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = useCallback(
    (e) => {
      setAnchorEl(e.currentTarget);
    },
    [setAnchorEl]
  );

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, [setAnchorEl]);

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="nav-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="nav-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <Nav to="/" onClick={handleClose} $active={location.pathname === "/"}>
          留言板
        </Nav>
        <Nav
          to="/messages"
          onClick={handleClose}
          $active={location.pathname.includes("/messages")}
        >
          訊息
        </Nav>
        <Nav
          to="/upload-image"
          onClick={handleClose}
          $active={location.pathname === "/upload-image"}
        >
          圖片上傳
        </Nav>
      </Menu>
    </div>
  );
}

function Header() {
  const location = useLocation();

  return (
    <HeaderContainer>
      <NavbarList>
        <Hidden only="xs">
          <Nav to="/" $active={location.pathname === "/"}>
            留言板
          </Nav>
          <Nav to="/messages" $active={location.pathname.includes("/messages")}>
            訊息
          </Nav>
          <Nav
            to="/upload-image"
            $active={location.pathname === "/upload-image"}
          >
            圖片上傳
          </Nav>
        </Hidden>
        <Hidden smUp>
          <NavMenu />
        </Hidden>
      </NavbarList>
    </HeaderContainer>
  );
}

export default memo(Header);
