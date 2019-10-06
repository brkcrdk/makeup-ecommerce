import styled from "styled-components";
import device from "../../device";
export const Img = styled.img`
  width: 1.7em;
  height: 1.7em;
  margin: 0 0.5em;
  @media ${device.mobileL} {
    width: 2em;
    height: 2em;
  }
  @media ${device.tabletLaptop} {
    width: 1.7em;
    height: 1.7em;
  }
  @media ${device.laptop} {
    width: 1.7em;
    height: 1.7em;
  }
  @media ${device.desktop} {
    width: 3em;
    height: 3em;
  }
`;
