import styled from "styled-components";
import fonts from "../../../fonts";
import colours from "../../../colours";
import device from "../../../device";
export const Container = styled.div`
  /* width: 100%; */
`;
export const Header = styled.h3`
  display: flex;
  justify-content: center;
  color: ${colours.primaryText};
  font-family: ${fonts.raleway};
  font-weight: 300;
  font-size: 2em;
  letter-spacing: 0;
  word-spacing: 0.5em;
  @media ${device.mobileS} {
    font-size: 1.2em;
    margin-top: -1em;
  }
  @media ${device.mobileL} {
    font-size: 1.5em;
  }
  @media ${device.mobileTablet} {
    font-size: 1.7em;
  }
  @media ${device.laptop} {
    font-size: 2em;
  }
  @media ${device.desktop} {
    font-size: 2.5em;
  }
`;
