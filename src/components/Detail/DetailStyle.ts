import styled from "styled-components";
import { colours, fonts, device } from "../utils";
export const Container = styled.div`
  background: white;
`;

export const Parallax = styled.div`
  background-color: white;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    color: ${colours.pink};
    font-family: ${fonts.raleway};
    font-style: italic;
    font-size: 2em;
    position: absolute;
  }
`;
export const Content = styled.div`
  margin-top: -2em;
  margin-left: 2em;
  margin-right: 2em;
  display: grid;
  @media ${device.mobileS} {
    grid-template-columns: repeat(1, 12fr);
  }
  @media ${device.mobileTablet} {
    grid-template-columns: repeat(2, 6fr);
  }
  border: 1px solid red;
`;

export const ImgContainer = styled.div`
  border: 1px solid green;
  img {
    width: 100%;
  }
`;
export const DetailContainer = styled.div`
  display: grid;
`;
