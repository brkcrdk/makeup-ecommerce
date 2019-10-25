import styled from "styled-components";
import background from "./p11.jpg";
import { colours, fonts } from "../utils";
export const Container = styled.div``;

export const Parallax = styled.div`
  background-image: url(${background});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    font-family: ${fonts.dancingScript};
    font-style: italic;
    font-size: 2em;
    position: absolute;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 4fr 8fr;
  background-color: ${colours.background};
  border-radius: 2px;
  box-shadow: ${colours.boxShadow};
  margin-top: -2em;
  margin-left: 0.7em;
  margin-right: 0.7em;
`;
