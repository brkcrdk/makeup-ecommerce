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
export const CaroContainer = styled.div`
  width: 100%;
  border: 1px solid green;
  overflow: hidden;
`;

export const Slides = styled.div`
  border: 1px solid red;
  width: 100%;
`;
interface ContentProps {
  active: number;
  index: number;
}
export const SlideContent = styled.div`
  border: 1px solid blue;
  width: 100%;
  display: ${(p: ContentProps) => (p.active === p.index ? "block" : "none")};
`;
