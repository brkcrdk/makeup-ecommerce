import styled from "styled-components";
import { colours, fonts } from "../../utils";
export const MenuContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
`;
export const MenuItem = styled.div`
  &:hover > div {
    display: block;
  }
  h4 {
    cursor: pointer;
    font-weight: 100;
    padding: 0 0.5em;
    font-size: 1.2em;
    font-family: ${fonts.raleway};
  }
`;

export const MenuDropDown = styled.div`
  display: none;
  position: absolute;
`;
export const DropContent = styled.div`
  margin-top: 1em;
  display: grid;
  background-color: ${colours.pink};
`;
