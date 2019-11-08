import styled from "styled-components";
import { device, colours } from "../../utils";

export const Container = styled.div`
  /* When hover show cart */
  &:hover > div {
    @media ${device.tablet} {
      display: block;
    }
  }
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

export const CartWrapper = styled.div`
  display: none;
  position: absolute;
  background-color: ${colours.secondaryText};
  padding-top: 1em;
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
    width: 32%;
    margin-left: -22%;
  }
  @media ${device.tabletLaptop} {
    width: 30%;
    margin-left: -20%;
  }
  @media ${device.laptop} {
    width: 30%;
    margin-left: -22%;
  }
  @media ${device.laptopL} {
    width: 25%;
    margin-left: -17%;
  }
`;
