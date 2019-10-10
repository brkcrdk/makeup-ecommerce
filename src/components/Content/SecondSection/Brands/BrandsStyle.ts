import styled from "styled-components";
import device from "../../../device";

export const Slide = styled.div`
  flex: 0 0 0;
`;
export const MobileS = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  img {
    margin-top: -1.4em;
    @media ${device.mobileS} {
      width: 14em;
      height: 7em;
    }
  }
  @media ${device.mobileM} {
    display: none;
  }
`;
