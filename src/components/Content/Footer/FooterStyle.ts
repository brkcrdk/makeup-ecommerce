import styled from "styled-components";
import device from "../../device";
export const Container = styled.div`
  display: grid;
  text-align: center;
  @media ${device.mobileS} {
    grid-template-columns: repeat(1, 12fr);
    margin-top: 2.5em;
  }
  @media ${device.tablet} {
    grid-template-columns: repeat(3, 4fr);
    margin-top: 5em;
  }
`;