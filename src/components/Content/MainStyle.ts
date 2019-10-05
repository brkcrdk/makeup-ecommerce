import styled from "styled-components";
import background from "./makeup.jpg";

export const Container = styled.div`
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
export const Dimmed = styled.div`
  ${(p: DimmedProps) => (p.toggle ? "background-color:black;opacity:0.5" : "")};
  height: 100vh;
  transition: background-color 1s;
`;
export const Content = styled.div`
  /* Center content from here*/
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1.5em;
`;
