import styled from "styled-components";
interface ContainerProps {
  toggle: boolean;
}
export const Container = styled.div`
  transition: 0.5s;
  margin-left: ${(p: ContainerProps) => (p.toggle ? "10em" : "")};
  margin-top: 1em;
`;

export const Content = styled.div`
  padding-left: 2em;
  padding-top: 1em;
`;
