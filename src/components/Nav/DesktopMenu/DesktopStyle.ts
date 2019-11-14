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
    margin: 0 0.5em;
    font-family: ${fonts.aBeeZee};
  }
`;

export const MenuDropDown = styled.div`
  display: none;
  position: absolute;
`;
export const DropContent = styled.div`
  display: grid;
  background-color: ${colours.pink};
`;
