import styled from "styled-components";
import colours from "../../../colours";

export const AccordionContainer = styled.div``;

export const AccordionContent = styled.ul`
  color: ${colours.primaryText};
`;
export const AccordionList = styled.li`
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
