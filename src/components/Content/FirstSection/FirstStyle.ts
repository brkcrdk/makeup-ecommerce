import styled from "styled-components";
import fonts from "../../fonts";
import colours from "../../colours";
export const MainText = styled.div`
  position: absolute;
  top: 20em;
  left: 5em;
  h4 {
    font-family: ${fonts.greatVibes};
    font-size: 1.3em;
  }
  p {
    font-family: ${fonts.montserrat};
    color: ${colours.primaryText};
    span {
      color: ${colours.pink};
      font-size: 1.5em;
    }
  }
`;
