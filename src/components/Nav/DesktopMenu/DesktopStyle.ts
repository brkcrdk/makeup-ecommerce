import styled from "styled-components";
import fonts from "../../fonts";
import colours from "../../colours";
export const MenuContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
`;
export const Menu = styled.li`
  font-family: ${fonts.montserrat};
  font-weight: 600;
  color: ${colours.primaryText};
  text-transform: uppercase;
  cursor: pointer;
  list-style: none;
  margin: 1em 1em;
`;
