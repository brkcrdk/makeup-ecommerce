import styled from "styled-components";
import { colours, fonts, device } from "../utils";
export const Container = styled.div`
  background: white;
  text-align: center;
`;

export const Parallax = styled.div`
  background-color: white;
  height: 45vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    color: ${colours.pink};
    font-family: ${fonts.raleway};
    font-style: italic;
    font-size: 1.5em;
    position: absolute;
  }
`;
export const Content = styled.div`
  margin-top: -2em;
  margin-left: 2em;
  margin-right: 2em;
  display: grid;
  text-align: center;
  @media ${device.mobileS} {
    grid-template-columns: repeat(1, 12fr);
  }
  @media ${device.mobileTablet} {
    grid-template-columns: repeat(2, 6fr);
  }
`;

export const ImgContainer = styled.div`
  img {
    width: 40%;
  }
`;
export const DetailContainer = styled.div`
  text-align: left;
  display: grid;
`;
export const DetailSpan = styled.span`
  font-weight: 600;
`;
export const DetailP = styled.p`
  font-weight: 300;
`;
