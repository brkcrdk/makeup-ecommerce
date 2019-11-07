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
  border: 1px solid red;

  @media ${device.mobileS} {
    grid-template-columns: repeat(1, 12fr);
  }
  @media ${device.laptop} {
    grid-template-columns: 4fr 8fr;
  }
`;

export const ImgContainer = styled.div`
  border: 1px solid yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    @media ${device.mobileS} {
      width: 50%;
    }
    @media ${device.laptop} {
      width: 60%;
    }
  }
`;

export const DetailContainer = styled.div`
  text-align: left;
  display: grid;
  padding: 1em;
`;
export const Splitter = styled.hr`
  width: 100%;
  border: 0.5px solid lightgrey;
  padding: 0;
`;
export const DetailHead = styled.h4`
  font-family: ${fonts.raleway};
  font-size: 1.1em;
  padding: 0;
  margin: 0;
`;
export const DetailText = styled.p`
  font-family: ${fonts.aBeeZee};
  padding: 0;
  padding-left: 0.3em;
  margin: 0;
  margin-bottom: 1em;
`;

export const TagColourContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
