import styled from "styled-components";
import device from "../../../device";
export const Container = styled.div`
  width: 1.6em;
  height: 1.6em;
  display: flex;
  justify-content: center;
  margin-right: 1em;
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.mobileL} {
    display: none;
  }
  @media ${device.mobileM} {
    display: none;
  }
  @media ${device.tablet} {
    display: none;
  }
  @media ${device.tabletLaptop} {
    display: block;
    width: 2em;
    height: 2em;
  }
  @media ${device.tabletLaptop} {
    width: 1.7em;
    height: 1.7em;
  }
  @media ${device.laptop} {
    width: 1.7em;
    height: 1.7em;
  }
  @media ${device.desktop} {
    width: 3em;
    height: 3em;
    margin-right: 3em;
  }
`;

export const Icon = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
export const Button = styled.a``;
