import styled from "styled-components";
import { colours, device } from "../../utils";
export const Container = styled.div`
  /* box-shadow: ${colours.boxShadow}; */
  margin: 0 1em;
  
  overflow:hidden;
  @media ${device.laptopL}{
    padding-right:2em;
  }
  /* display:grid; */
  /* grid-template-columns:repeat(4,3fr) */
`;
