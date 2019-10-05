import styled from "styled-components";
import background from "./makeup.jpg";
interface ContainerProps {
  toggle: boolean;
}
export const Container = styled.div`
  background-image: url(${background});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  transition: 0.5s;
  opacity: ${(p: ContainerProps) => (p.toggle ? "0.7" : "1")};
`;

export const Content = styled.div`
  /* Center content from here*/
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1.5em;
`;
