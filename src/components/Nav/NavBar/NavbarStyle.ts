import styled from "styled-components";
import colours from "../../colours";
//NAVBAR CONTAINER
export const Container = styled.div`
  position: fixed;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 9fr 2fr;
  border-bottom: 1px solid lightgray;
`;
//SEARCH and CART ICON CONTAINER
export const RightSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

//HAMBURGER TOGGLE
interface sideProps {
  sidebarToggle: boolean;
}

const transform1 = "rotate(-45deg) translate(-0.7em, 0.2em)";
const transform2 = "rotate(45deg) translate(-0.7em, -0.2em)";

export const HamburgerContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: grid;
  div {
    width: 2em;
    border: 1px solid ${colours.primaryText};
    margin: 0.5em;
    #ham1 {
      transition: transform 0.8s;
      transform: ${(p: sideProps) => (p.sidebarToggle ? `${transform1}` : ``)};
    }
    #ham2 {
      transition: opacity 0.5s;
      opacity: ${(p: sideProps) => (p.sidebarToggle ? "0" : `1`)};
    }
    #ham3 {
      transition: transform 0.8s;
      transform: ${(p: sideProps) => (p.sidebarToggle ? `${transform2}` : ``)};
    }
  }
`;
