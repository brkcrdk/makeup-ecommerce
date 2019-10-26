import styled from "styled-components";
import { colours, fonts } from "../../utils";
export const Container = styled.div``;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${fonts.montserrat};
  div {
    display: flex;
    align-items: center;
    border: 1px solid red;
    padding: 0.5em;
  }
  button {
    color: ${colours.primaryText};
    border: none;
    background: none;
    outline: none;
  }
`;
export const PageList = styled.li`
  padding: 0 0.5em;
  margin: 0 0.5em;
  list-style: none;
  cursor: pointer;
`;
export const PageContent = styled.div``;
