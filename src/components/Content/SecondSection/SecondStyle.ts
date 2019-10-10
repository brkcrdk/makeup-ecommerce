import styled from "styled-components";
import device from "../../device";

//
export const Container = styled.div``;
export const Brands = styled.div`
  img {
    opacity: 0.5;
    transition: transform 1s;
    &:hover {
      opacity: 1;
      transform: scale(1.07);
    }
  }
`;
