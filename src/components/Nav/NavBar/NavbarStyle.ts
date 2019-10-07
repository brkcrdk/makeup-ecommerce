import styled from "styled-components";
import colours from "../../colours";
import device from "../../device";
//NAVBAR CONTAINER
interface ContainerProps {
  scroll: boolean;
}
const scrolled = `
  animation-name:fade-in;
  animation-duration:1s;
  background-color:white;
`;
const unscrolled = `
  background-color:transparent
`;
export const Container = styled.div`
  /* position: ${(p: ContainerProps) => (p.scroll ? "fixed" : "absolute")};
  animation-name: ${(p: ContainerProps) => (p.scroll ? "fade-in" : "")};
  animation-duration: 1s; */
  ${(p: ContainerProps) => (p.scroll ? scrolled : unscrolled)}
  position:fixed;
  z-index:1;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 9fr 2fr;

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(-20%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
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
interface MobileProps {
  scroll: boolean;
}
export const MobileNavbar = styled.div<MobileProps>`
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
