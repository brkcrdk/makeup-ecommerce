import styled from "styled-components";
import { device, colours } from "../../utils";

export const Container = styled.div``;

interface ImgProps {
  scroll: boolean;
}
export const Img = styled.div`
  color: ${colours.primaryText};
  font-size: 1.5em;
  margin: 0 0.5em;
  &:hover ~ div {
    transform: translateX(0);
    display: flex;
  }
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
  background-color: ${colours.background};
  margin-top: 1em;
  margin-left: -12em;
  width: 25%;

  ::after {
    content: " ";
    border-bottom: 12px solid ${colours.background};
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    position: relative;
    top: -1.1em;
  }
`;
