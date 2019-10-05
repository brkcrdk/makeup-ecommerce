import styled from "styled-components";
import fonts from "../../fonts";
import colours from "../../colours";
import device from "../../device";
export const MainText = styled.div`
  position: absolute;
  top: 20em;
  left: 5em;
  h4 {
    font-family: ${fonts.greatVibes};
    font-size: 1.5em;
    color: ${colours.primaryText};
    font-weight: 600;
  }
  p {
    font-family: ${fonts.montserrat};
    color: ${colours.primaryText};
    font-weight: 900;
    @media ${device.mobileM} {
      color: white;
    }

    span {
      color: ${colours.pink};
      word-spacing: 12em;
      font-size: 2em;
      font-family: ${fonts.greatVibes};
    }
  }
`;
