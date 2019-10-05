import styled from "styled-components";
import device from "../../device";
export const Img = styled.img`
  width: 1.7em;
  height: 1.7em;
  margin: 0 0.5em;
  fill: #f1f1f1;
  @media ${device.mobileM} {
    width: 2em;
    height: 2em;
  }
`;
