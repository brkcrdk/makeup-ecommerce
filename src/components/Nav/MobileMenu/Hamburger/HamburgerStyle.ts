import styled from "styled-components";
interface ContainerProps {
  toggle: boolean;
}
export const Container = styled.div<ContainerProps>`
  #ham1 {
    transform: rotate(-45deg) translate(-5px, 6px);
  }
  #ham2 {
    opacity: 0;
  }
  #ham3 {
    transform: rotate(45deg) translate(-5px, -7px);
  }
`;
