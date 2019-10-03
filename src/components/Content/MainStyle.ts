import styled from "styled-components";
interface ContainerProps {
  toggle: boolean;
}
export const Container = styled.div`
  transition: 0.5s;
  filter: ${(p: ContainerProps) =>
    p.toggle ? "blur(3px); pointer-events:none" : ""};
  margin-top: 1.5em;
`;

export const Content = styled.div`
  /* Center content from here*/
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1.5em;
`;
