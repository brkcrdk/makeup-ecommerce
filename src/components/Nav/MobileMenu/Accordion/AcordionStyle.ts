import styled from "styled-components";
import colours from "../../../colours";

export const AccordionContainer = styled.div`
  border: 1px solid red;
`;

export const AccordionContent = styled.ul`
  color: ${colours.primaryText};
  padding-left: 0.5em;
  /* Used flex to prevent word-wrapping  */
  display: flex;
`;
interface ListProps {
  activeId: number;
  index: number;
}
export const AccordionList = styled.li`
  display: ${(p: ListProps) => (p.activeId === p.index ? "block" : "none")};
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
