import styled from "styled-components";
import { colours, fonts } from "../../utils";

export const Container = styled.div``;
export const PagiContent = styled.div``;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${fonts.montserrat};
  div {
    display: flex;
    align-items: center;
    border: 1px solid ${colours.pink};
    padding: 0.5em;
  }
`;
interface PagilistProps {
  activePage: number;
  activeId: number;
}

const active = `
  background-color:${colours.pink};
  color:white;  
`;
export const PagiBottom = styled.div``;
export const PagiList = styled.li`
  ${(p: PagilistProps) => (p.activePage === p.activeId ? active : "")}
  padding: 0.5em 1em;
  margin: 0 0.5em;
  list-style: none;
  cursor: pointer;
`;

export const PagiButton = styled.button`
  color: ${colours.primaryText};
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`;
