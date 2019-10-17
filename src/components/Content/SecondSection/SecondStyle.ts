import styled from "styled-components";

//
export const Container = styled.div`
  margin: 0 2em;
  width: 90%;
`;
export const BrandSection = styled.div`
  margin-bottom: 3em;
  margin-top: 1em;
  img {
    opacity: 0.5;
    transition: transform 0.5s;
    &:hover {
      opacity: 1;
      transform: scale(1.07);
    }
  }
`;

export const WantedSection = styled.div``;
