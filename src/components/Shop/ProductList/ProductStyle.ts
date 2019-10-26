import styled from "styled-components";
import { colours } from "../../utils";
export const Container = styled.div``;
export const PageList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    border: 1px double ${colours.pink};
    padding: 0 0.5em;
    margin: 0 0.5em;
    list-style: none;
    cursor: pointer;
  }
`;
