import styled from "styled-components";
import { device, colours, fonts } from "../../utils";

export const Container = styled.div`
  &:hover > div {
    @media ${device.tablet} {
      display: block;
    }
  }
`;

export const CartWrapper = styled.div`
  display: none;
  position: absolute;
  padding-top: 0.5em;
  animation: cartFade 0.3s;

  @keyframes cartFade {
    from {
      opacity: 0;
      transform: translateY(20%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media ${device.tablet} {
    width: 20em;
    margin-left: -15em;
  }
  @media ${device.tabletLaptop} {
    width: 20em;
    margin-left: -16em;
  }
  @media ${device.laptop} {
    width: 20em;
    margin-left: -15em;
  }
  @media ${device.laptopL} {
    width: 22em;
    margin-left: -15em;
  }
`;

export const CartContent = styled.div`
  background-color: ${colours.background};
  min-height: 3em;
  font-family: ${fonts.aBeeZee};
  padding: 1em;
  color: ${colours.primaryText};
  border: 1px solid ${colours.secondaryText};
  box-shadow: ${colours.boxShadow};
`;

interface ImgProps {
  scroll: boolean;
}
export const Img = styled.div`
  color: ${colours.primaryText};
  font-size: 1.5em;
  margin: 0 0.5em;

  @media ${device.mobileS} {
    color: ${(p: ImgProps) =>
      p.scroll ? `${colours.primaryText}` : `${colours.secondaryText}`};
  }
  @media ${device.mobileL} {
    font-size: 1.5em;
  }
  @media ${device.tabletLaptop} {
    width: 1.7em;
    height: 1.7em;
  }
  @media ${device.laptop} {
    color: ${colours.primaryText};
    margin-top: 0.2em;
    font-size: 1.6em;
  }
  @media ${device.desktop} {
    font-size: 3em;
    margin-right: 0;
  }
`;
