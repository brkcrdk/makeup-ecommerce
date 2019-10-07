import styled from "styled-components";
import device from "../../device";
export const Img = styled.div`
  font-size: 1.5em;
  margin: 0 0.5em;
  @media ${device.mobileL} {
    font-size: 1.5em;
  }
  @media ${device.tabletLaptop} {
    width: 1.7em;
    height: 1.7em;
  }
  @media ${device.laptop} {
    margin-top: 0.2em;
    font-size: 1.6em;
  }
  @media ${device.desktop} {
    font-size: 3em;
    margin-right: 0;
  }
`;
