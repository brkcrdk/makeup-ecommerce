import styled from "styled-components";
import { colours, fonts } from "../utils";
export const Container = styled.div``;

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
  grid-template-columns: repeat(2, 6fr);
`;

export const ImgContainer = styled.div``;
export const DetailContainer = styled.div``;
