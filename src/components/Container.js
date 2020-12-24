import styled from "styled-components";
import { Container } from "@material-ui/core";
import { MEDIA_QUERY_LG, PAGE_HEIGHT } from "../constants/style";

const StyledContainer = styled(Container)`
  && {
    color: ${(props) => props.theme.color.darkGray};
    max-width: ${(props) => props.maxWidthAtPhoneSize};
    padding: ${(props) => props.paddingAtPhoneSize};
    border: ${(props) =>
      props.defaultBorder === "true"
        ? `1px solid ${props.theme.color.darkGray}`
        : ""};
    height: ${(props) =>
      props.defaultHeight === "true" ? `${PAGE_HEIGHT}` : ""};

    ${MEDIA_QUERY_LG} {
      max-width: ${(props) => props.maxWidthAtDeskTopSize};
      padding: ${(props) => props.paddingAtDeskTopSize};
    }
  }
`;

export default StyledContainer;
