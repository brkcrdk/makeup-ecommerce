import styled from "styled-components";
import { device, colours, fonts } from "../../utils";
export const Container = styled.div`
  text-align: center;
  padding: 0 1em;
  p {
    font-family: ${fonts.aBeeZee};
    span {
      color: ${colours.pink};
      font-size: 1.2em;
      font-weight: 900;
      font-family: ${fonts.dancingScript};
    }
  }
`;

export const FootSection = styled.div`
  display: grid;
  margin-bottom: 1.5em;
  @media ${device.mobileS} {
    grid-template-columns: repeat(1, 12fr);
    margin-top: 2.5em;
  }
  @media ${device.tablet} {
    grid-template-columns: repeat(3, 4fr);
    margin-top: 5em;
  }
`;
