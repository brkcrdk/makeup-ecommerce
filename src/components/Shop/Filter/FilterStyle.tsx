import styled from "styled-components";
import { fonts } from "../../utils";
export const Container = styled.div`
  text-align: center;
`;

export const TagContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 0.5em;
  p {
    font-family: ${fonts.aBeeZee};
  }
`;
