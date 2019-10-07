import styled from "styled-components";
import colours from "../../colours";
import device from "../../device";
//NAVBAR CONTAINER
export const Container = styled.div`
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 9fr 2fr;
  @media ${device.desktop} {
    padding: 2em;
  }
`;
//SEARCH and CART ICON CONTAINER
export const RightSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.laptop} {
    margin-top: 1em;
  }
`;

export const MobileNavbar = styled.div`
  align-items: center;
  justify-content: center;
  display: grid;
  @media ${device.tabletLaptop} {
    display: none;
  }
  div {
    width: 2em;
    border: 1px solid ${colours.primaryText};
    margin: 0.5em;
  }
`;

export const DesktopNavbar = styled.div`
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
  }
`;
