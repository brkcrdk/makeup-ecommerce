import styled from "styled-components";
import device from "../../device";
export const Img = styled.img`
  width: 1.7em;
  height: 1.7em;
  margin: 0 0.5em;
  fill: #f1f1f1;
  @media ${device.mobileL} {
    width: 2em;
    height: 2em;
  }
  @media ${device.desktop} {
    width: 3.5em;
    height: 3.5em;
  }
`;
