import styled from "styled-components";
import background from "./makeup.jpg";

export const Container = styled.div``;
export const Section = styled.div`
  background-image: url(${background});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  transition: 0.5s;
`;
interface DimmedProps {
  toggle: boolean;
}
const dimmed = `
  opacity:0.5;
  background-color:black;
  transition: 1s;
`;
const unDimmed = `
  background-color:transparent;
  opacity:1;
  transition: 1s;
`;
export const Dimmed = styled.div`
  ${(p: DimmedProps) => (p.toggle ? dimmed : unDimmed)};
  height: 100vh;
`;
export const Content = styled.div`
  /* Center content from here*/
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1.5em;
`;
