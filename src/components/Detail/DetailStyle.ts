import styled from "styled-components";
import { colours, fonts, device } from "../utils";
export const Container = styled.div`
  background: white;
`;

export const Parallax = styled.div`
  background-color: white;
  height: 40vh;
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
`;

export const ImgContainer = styled.div`
  img {
    width: 100%;
  }
`;
export const DetailContainer = styled.div`
  display: grid;
`;
export const DetailSpan = styled.span`
  font-weight: 600;
`;
export const DetailP = styled.p`
  font-weight: 300;
`;
