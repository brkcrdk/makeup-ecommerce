import styled from "styled-components";
interface Toggle {
  toggle: boolean;
}
export const AccordionContainer = styled.ul`
  height: 100%;
  width: ${(p: Toggle) => (p.toggle ? "10em" : "0")};
  position: fixed;
  top: 0;
  left: -2.5em;
  padding-left: 2.5em !important!;
  z-index: 1;
  overflow-x: hidden;
  transition: 0.5s;
  text-transform: capitalize;
  margin-top: 3.5em;
  background-color: #111;
  color: white;
  a {
    text-decoration: none;
    color: white;
  }
`;

export const AccordionTitle = styled.li`
  list-style: none;
  margin: 1em 0 1em 1em;
  overflow-x: hidden;
  width: 100%;
`;
export const AccordionIcon = styled.i``;
export const AccordionContent = styled.p``;
