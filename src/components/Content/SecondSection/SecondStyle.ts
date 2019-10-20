import styled from "styled-components";
import device from "../../device";
import fonts from "../../fonts";
import colours from "../../colours";
import { Colors } from "react-native/Libraries/NewAppScreen";
export const Container = styled.div`
  margin: 0 2em;
  width: 90%;
`;
export const BrandSection = styled.div`
  margin-bottom: 3em;
  margin-top: 1em;
  img {
    opacity: 0.5;
    transition: transform 0.5s;
    &:hover {
      opacity: 1;
      transform: scale(1.07);
    }
  }
`;
export const WantedSection = styled.div``;

export const Parallax = styled.div`
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 20vh;
  margin-left: -5vw;
  margin-bottom: 1em;
  h3 {
    margin-right: 3.5em;
    font-family: ${fonts.aBeeZee};
    color: ${colours.primaryText};
    @media ${device.mobileS} {
      font-size: 1em;
    }
    @media ${device.mobileTablet} {
      font-size: 1.5em;
    }
  }
  @media ${device.mobileS} {
  }
`;
