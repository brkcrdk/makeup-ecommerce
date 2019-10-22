import styled from "styled-components";
import device from "../../device";
import fonts from "../../fonts";
import colours from "../../colours";
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
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 20vh;
  margin: 1em 0 1em -5vw;
  @media ${device.mobileS} {
    background-attachment: initial;
    align-items: flex-start;
    color: black;
  }
  @media ${device.tablet} {
    background-attachment: fixed;
    color: ${colours.pink};
  }
  h3 {
    margin-right: 3.5em;
    font-family: ${fonts.aBeeZee};

    @media ${device.mobileS} {
      font-size: 1em;
      font-weight: 600;
    }
    @media ${device.mobileTablet} {
      font-size: 1.5em;
    }
    @media ${device.desktop} {
      font-size: 2em;
    }
  }
  @media ${device.mobileS} {
  }
`;
