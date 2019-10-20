import styled from "styled-components";
import device from "../../../device";
export const Container = styled.div`
  padding: 0 1em;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(1, 12fr);

  @media ${device.mobileTablet} {
    grid-template-columns: repeat(3, 4fr);
  }
`;
export const TipContainer = styled.div`
  width: 100%;
`;
