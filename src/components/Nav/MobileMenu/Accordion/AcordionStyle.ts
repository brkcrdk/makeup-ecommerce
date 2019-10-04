import styled from "styled-components";
import colours from "../../../colours";

export const AccordionContainer = styled.div``;

interface UlProps {
  activeId: number;
  index: number;
}
export const AccordionContent = styled.ul`
  color: ${colours.primaryText};
  padding-left: 0.5em;
  /* Used flex to prevent word-wrapping  */
  /* And saperate text and icon evenly */
  display: flex;
  justify-content: space-between;
  span {
    text-align: right;
    transform: ${(p: UlProps) =>
      p.activeId === p.index ? "rotate(90deg)" : ""};
  }
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
