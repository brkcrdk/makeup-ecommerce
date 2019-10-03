import styled from "styled-components";
import colours from "../../colours";
interface Toggle {
  toggle: boolean;
}
export const AccordionContainer = styled.ul`
  height: 100vh;
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
  background-color: ${colours.background};
  opacity: 0.8;
  a {
    cursor: pointer;
    text-decoration: none;
    color: ${colours.primaryText};
    :active {
      background-color: transparent;
    }
  }
`;

export const AccordionTitle = styled.li`
  list-style: none;
  margin: 1em 0 1em 1em;
  overflow-x: hidden;
  width: 100%;
  color: ${colours.primaryText};

  :active {
    border: none;
    background-color: transparent;
  }
`;

interface ContentProps {
  isActive: boolean;
}
export const AccordionContent = styled.div`
  display: ${(p: ContentProps) => (p.isActive ? "block" : "none")};
  a {
    padding: 0.5em;
    display: block;
  }
`;
