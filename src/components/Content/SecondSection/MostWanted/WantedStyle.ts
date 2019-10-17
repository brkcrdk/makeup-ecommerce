import styled from "styled-components";
import fonts from "../../../fonts";
import colours from "../../../colours";

export const Container = styled.div`
  /* width: 100%; */
`;
export const Header = styled.h3`
  display: flex;
  justify-content: center;
  color: ${colours.primaryText};
  font-family: ${fonts.raleway};
  font-weight: 300;
  font-size: 2em;
  letter-spacing: 0;
  word-spacing: 0.5em;
`;
export const CardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 3fr);
  border: 1px solid red;
`;
