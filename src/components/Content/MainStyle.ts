import styled from "styled-components";
interface ContainerProps {
  toggle: boolean;
}
export const Container = styled.div`
  transition: 0.5s;
  margin-left: ${(p: ContainerProps) => (p.toggle ? "10em" : "")};
  margin-top: 1.5em;
`;

export const Content = styled.div`
  /* Center content from here*/
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1.5em;
`;
