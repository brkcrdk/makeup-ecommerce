import styled from "styled-components";
import colours from "../../colours";
//NAVBAR CONTAINER
export const Container = styled.div`
  position: fixed;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 9fr 2fr;
`;
//SEARCH and CART ICON CONTAINER
export const RightSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HamburgerContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: grid;
  div {
    width: 2em;
    border: 1px solid ${colours.primaryText};
    margin: 0.5em;
  }
`;
