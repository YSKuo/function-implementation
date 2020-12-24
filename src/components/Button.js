import styled from "styled-components";
import { Button } from "@material-ui/core";

const StyledButton = styled(Button)`
  && {
    background-color: ${(props) => props.theme.color.darkGray};
    color: ${(props) => props.theme.color.white};
    padding: 12px 36px;
    width: fit-content;
  }
`;

export default StyledButton;
