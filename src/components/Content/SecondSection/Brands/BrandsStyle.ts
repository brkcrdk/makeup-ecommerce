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
    border: 1px solid red;
    margin-top: -1em;
  }
  @media ${device.mobileM} {
    display: none;
  }
`;
